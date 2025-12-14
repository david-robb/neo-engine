import { defineStore } from 'pinia';
import { MeshLine } from '@lume/three-meshline';
import { EnginePrimaryBody, EngineSecondaryBody, SimulationMeshes, SimulationTime } from '../types/simulation.types';
import { GridHelper, InstancedMesh, Vector3 } from 'three';
import { CAMERA_START_POS } from '../../../utility/constants';
import { fetch } from '../services/database.service';
import { buildGridMesh, buildInstancedSphereMesh, buildOrbitMeshLine, buildSphereMesh } from '../services/mesh.service';
import { buildPrimaryBodies } from '../utilities/primary-body.utilities';
import { markRaw } from 'vue';

export enum SimulationStateFlags {
    NONE = 0,
    SIMULATION_READY = 1 << 0,
    GRID_ENABLED = 1 << 1,
    IS_SEARCHING = 1 << 2,
}

export interface IdNamePair {
    id: number;
    name: string;
}

export const useSimulationStateStore = defineStore('simulation-state', {
    state: () => ({
        secondaryOrbitMeshMap: new Map<number, MeshLine>(),
        primaryBodyMap: new Map<string, EnginePrimaryBody>(),
        secondaryBodyMap: new Map<number, EngineSecondaryBody>(),
        globalMeshes: {} as SimulationMeshes,
        mousePosition: new Vector3(0, 0, 1),
        cameraPosition: CAMERA_START_POS.clone(),
        cameraTarget: new Vector3(0, 0, 0),
        simulationFlags: SimulationStateFlags.NONE,
        focusedSecondaryBodyIds: new Set<number>(),
        objectsNearEarth: new Set<number>(),
        simulationTime: {
            simulationClock: undefined,
            multiplier: 1,
            epoch: new Date(),
        } as SimulationTime,
    }),
    getters: {
        isReady(state) {
            return (state.simulationFlags & SimulationStateFlags.SIMULATION_READY) > 0;
        },
        isSearching(state) {
            return (state.simulationFlags & SimulationStateFlags.IS_SEARCHING) > 0;
        },
        gridEnabled(state) {
            return (state.simulationFlags & SimulationStateFlags.GRID_ENABLED) > 0;
        },
        timeMultiplier(state) {
            return state.simulationTime.multiplier;
        },
        simulationEpoch(state) {
            return state.simulationTime.epoch;
        },
        simulationClock(state) {
            return state.simulationTime.simulationClock;
        },
        primaryBodyArray(state) {
            return Array.from(state.primaryBodyMap.values());
        },
        secondaryBodySearchArray(state) {
            return Array.from(state.secondaryBodyMap.values()).map(
                (body) =>
                    ({
                        name: body.name,
                        id: body.id,
                    }) as IdNamePair
            );
        },
        focusedSecondaryBodyMap(state) {
            const focusedPoolMap = new Map<number, EngineSecondaryBody>();
            state.focusedSecondaryBodyIds.forEach((id) => {
                const obj = state.secondaryBodyMap.get(id);
                if (obj) {
                    focusedPoolMap.set(id, obj);
                }
            });

            return focusedPoolMap;
        },
        focusedSecondaryBodyArray(): EngineSecondaryBody[] {
            return Array.from(this.focusedSecondaryBodyMap.values());
        },
    },
    actions: {
        setTimeMultiplier(timeMultiplier: number) {
            this.simulationTime.multiplier = timeMultiplier;
        },
        toggleFlag(flag: SimulationStateFlags) {
            this.simulationFlags = this.simulationFlags ^ flag;
        },
        setFlag(flag: SimulationStateFlags) {
            this.simulationFlags = this.simulationFlags | flag;
        },
        clearFlag(flag: SimulationStateFlags) {
            this.simulationFlags = this.simulationFlags & ~flag;
        },
        setSimulationClock(value: Date) {
            this.simulationTime.simulationClock = value;
        },
        setSearchFlag(value: boolean) {
            value ? this.setFlag(SimulationStateFlags.IS_SEARCHING) : this.clearFlag(SimulationStateFlags.IS_SEARCHING);
        },
        setSecondaryBodyFocus(id: number, focus: boolean) {
            focus ? this.focusedSecondaryBodyIds.add(id) : this.focusedSecondaryBodyIds.delete(id);
        },
        setCameraTarget(position: Vector3) {
            this.cameraTarget = position;
        },
        updateSecondaryObjectState(id: number, x: number, y: number, z: number, velocity: number, distanceToEarth: number) {
            const object = this.secondaryBodyMap.get(id);
            if (!object) {
                return;
            }

            object.currentPosition.x = x;
            object.currentPosition.y = y;
            object.currentPosition.z = z;

            object.velocity = velocity;
            object.distanceToEarth = distanceToEarth;
        },
        updatePrimaryObjectState(name: string, position: Vector3) {
            const object = this.primaryBodyMap.get(name);
            if (!object) {
                return;
            }

            object.currentPosition = position;
        },
        setPrimaryObjectOrbitVisibility(name: string, visible: boolean) {
            const orbitMesh = this.globalMeshes.primaryBodyOrbitMeshes?.find((mesh) => mesh.name === name);
            if (!orbitMesh) {
                return;
            }

            orbitMesh.visible = visible;
        },
        makePrimaryBodyTarget(name: string) {
            const object = this.primaryBodyMap.get(name);
            if (!object) {
                return;
            }

            this.setCameraTarget(object.currentPosition);
        },
        setObjectsNearEarth(objects: Set<number>) {
            this.objectsNearEarth = objects;
        },
        setMousePosition(x: number, y: number) {
            this.mousePosition.x = x;
            this.mousePosition.y = y;
        },
        async initializeSimulation(epoch: Date, amount: number) {
            this.simulationTime.epoch = epoch;

            const gridMesh: GridHelper = buildGridMesh();

            const secondaryBodies = await fetch(amount, epoch);
            const instancedMesh: InstancedMesh = buildInstancedSphereMesh(secondaryBodies.length);

            const primaryBodies: EnginePrimaryBody[] = buildPrimaryBodies(epoch);
            const bodyMeshes = primaryBodies.map((body) => buildSphereMesh(body.radiusKm, body.color, body.name));
            const orbitMeshes = primaryBodies
                .filter((body: EnginePrimaryBody) => !!body.orbitData)
                .map((body: EnginePrimaryBody) =>
                    buildOrbitMeshLine(body.orbitData!, body.color, body.name, Math.min(body.radiusKm / 2, 10000000))
                );

            primaryBodies.forEach((body) => this.primaryBodyMap.set(body.name, body));
            secondaryBodies.forEach((body) => this.secondaryBodyMap.set(body.id, body));

            this.globalMeshes.primaryBodyOrbitMeshes = markRaw(orbitMeshes);
            this.globalMeshes.gridMesh = markRaw(gridMesh);
            this.globalMeshes.primaryBodyMeshes = markRaw(bodyMeshes);
            this.globalMeshes.secondaryBodiesMesh = markRaw(instancedMesh);

            this.setSecondaryBodyFocus(secondaryBodies[0].id, true);
        },
    },
});

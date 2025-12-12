import { defineStore } from 'pinia';
import { Vector3 } from 'three';
import { EnginePrimaryBody, EngineSecondaryBody, SimulationMeshes, SimulationTime } from '../types/simulation.types';
import { computed, ref } from 'vue';
import { CAMERA_START_POS } from '../../../utility/constants';
import { MeshLine } from '@lume/three-meshline';

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

export const useStateStore = defineStore('simulation-state', () => {
    const _secondaryBodyMeshPool = ref(new Map<number, MeshLine>());
    const _primaryBody = ref(new Map<string, EnginePrimaryBody>([]));
    const _secondaryBody = ref(new Map<number, EngineSecondaryBody>([]));
    const _meshes = ref({} as SimulationMeshes);
    const _mousePosition = ref(new Vector3(0, 0, 1));
    const _cameraPosition = ref(CAMERA_START_POS.clone());

    const _cameraTarget = ref(new Vector3(0, 0, 0));
    const _stateFlags = ref<SimulationStateFlags>(SimulationStateFlags.NONE);
    const _focusedIds = ref(new Set<number>());
    const _objectsNearEarth = ref(new Set<number>());
    const _time = ref<SimulationTime>({
        epoch: new Date(),
        simulationClock: undefined,
        multiplier: 1,
    });

    const isReady = computed(() => (_stateFlags.value & SimulationStateFlags.SIMULATION_READY) > 0);
    const isSearching = computed(() => (_stateFlags.value & SimulationStateFlags.IS_SEARCHING) > 0);
    const gridEnabled = computed(() => (_stateFlags.value & SimulationStateFlags.GRID_ENABLED) > 0);

    const cameraTarget = computed(() => _cameraTarget.value);
    const timeMultiplier = computed(() => _time.value.multiplier);
    const simulationEpoch = computed(() => _time.value.epoch);
    const simulationClock = computed(() => _time.value.simulationClock);

    const primaryBodyArray = computed(() => Array.from(_primaryBody.value.values()));
    const idNamePairs = computed(() =>
        Array.from(_secondaryBody.value.values()).map(
            (body) =>
                ({
                    name: body.name,
                    id: body.id,
                }) as IdNamePair
        )
    );

    const focusedPool = computed(() => {
        const focusedPoolMap = new Map<number, EngineSecondaryBody>();
        _focusedIds.value.forEach((id) => {
            const obj = _secondaryBody.value.get(id);
            if (obj) {
                focusedPoolMap.set(id, obj);
            }
        });

        return focusedPoolMap;
    });

    const focusedPoolArray = computed(() => Array.from(focusedPool.value.values()));

    function updateTimeMultiplier(multiplier: number): void {
        _time.value.multiplier = multiplier;
    }

    function toggleFlag(flag: SimulationStateFlags): void {
        _stateFlags.value = _stateFlags.value ^ flag;
    }

    function setFlags(flag: SimulationStateFlags): void {
        _stateFlags.value = _stateFlags.value | flag;
    }

    function clearFlag(flag: SimulationStateFlags): void {
        _stateFlags.value = _stateFlags.value & ~flag;
    }

    function setEpoch(epoch: Date): void {
        _time.value.epoch = epoch;
    }

    function updateSimulationClock(value: Date): void {
        _time.value.simulationClock = value;
    }

    function toggleSearch(toggle: boolean): void {
        if (toggle) {
            setFlags(SimulationStateFlags.IS_SEARCHING);
        } else {
            clearFlag(SimulationStateFlags.IS_SEARCHING);
        }
    }

    function focusObject(id: number): void {
        _focusedIds.value.add(id);
    }

    function unfocusObject(id: number): void {
        _focusedIds.value.delete(id);
    }

    function setTarget(location: Vector3): void {
        _cameraTarget.value = location.clone();
    }

    function updateSecondaryObjectState(id: number, x: number, y: number, z: number, velocity: number, distanceToEarth: number): void {
        const object = _secondaryBody.value.get(id);
        if (object) {
            object.currentPosition.x = x;
            object.currentPosition.y = y;
            object.currentPosition.z = z;

            object.velocity = velocity;
            object.distanceToEarth = distanceToEarth;
        }
    }

    function updatePrimaryObjectState(name: string, position: Vector3): void {
        const object = _primaryBody.value.get(name);
        if (object) {
            object.currentPosition = position;
        }
    }

    function setPrimaryBodyOrbitVisible(bodyName: string, visible: boolean): void {
        const primaryBodyMesh = _meshes.value.primaryBodyOrbitMeshes?.find((mesh) => mesh.name === bodyName);
        if (primaryBodyMesh) {
            primaryBodyMesh.visible = visible;
        }
    }

    function setPrimaryBodyTarget(bodyName: string): void {
        const body = _primaryBody.value.get(bodyName);
        if (body) {
            setTarget(body.currentPosition.clone());
        }
    }

    function updateObjectsNearEarth(nearEarthObjects: Set<number>): void {
        _objectsNearEarth.value = nearEarthObjects;
    }

    return {
        _meshes,
        _secondaryBody,
        _stateFlags,
        _mousePosition,
        _cameraPosition,
        _objectsNearEarth,
        _time,
        _secondaryBodyMeshPool,
        _primaryBody,
        _cameraTarget,
        _focusedIds,

        focusedPool,
        focusedPoolArray,

        timeMultiplier,
        simulationEpoch,
        simulationClock,

        isReady,
        isSearching,

        gridEnabled,
        cameraTarget,
        primaryBodyArray,
        idNamePairs,

        updateTimeMultiplier,
        toggleFlag,
        setFlags,
        clearFlag,
        setEpoch,
        updateSimulationClock,
        toggleSearch,
        focusObject,
        unfocusObject,
        setTarget,
        updateSecondaryObjectState,
        updatePrimaryObjectState,
        setPrimaryBodyOrbitVisible,
        setPrimaryBodyTarget,
        updateObjectsNearEarth,
    };
});

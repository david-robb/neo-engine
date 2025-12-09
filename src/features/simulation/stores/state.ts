import { defineStore } from 'pinia';
import { FlagUtilities } from '../utilities/flag.utilities';
import { Vector3 } from 'three';
import { EnginePrimaryBody, EngineSecondaryBody, SimulationMeshes, SimulationTime } from '../types/simulation.types';
import { computed, ref } from 'vue';
import { CAMERA_START_POS } from '../../../utility/constants';
import { MeshLine } from '@lume/three-meshline';

export enum SimulationStateFlags {
    NONE = 0,
    SIMULATION_LOADING = 1 << 0,
    SIMULATION_READY = 1 << 1,
    GRID_ENABLED = 1 << 2,
    FOCUS_CHANGE = 1 << 3,
    UI_DISABLED = 1 << 4,
}

export const useStateStore = defineStore('simulation-state', () => {
    const _secondaryBodyMeshPool = new Map<number, MeshLine>();
    const _primaryBody = new Map<string, EnginePrimaryBody>([]);
    const _secondaryBody = new Map<number, EngineSecondaryBody>([]);
    const _meshes: SimulationMeshes = {} as SimulationMeshes;
    const _mousePosition: Vector3 = new Vector3(0, 0, 1);
    const _cameraPosition: Vector3 = CAMERA_START_POS;

    const _secondaryBodyPool = ref<Map<number, EngineSecondaryBody>>(new Map());
    const _objectsNearEarth = ref<string[]>([]);
    const _stateFlags = ref<SimulationStateFlags>(SimulationStateFlags.NONE);
    const _focusedBody = ref<EnginePrimaryBody | undefined>(undefined);
    const _time = ref<SimulationTime>({
        epoch: new Date(),
        simulationClock: undefined,
        multiplier: 1,
    });

    const isReady = computed(() => FlagUtilities.hasFlag(_stateFlags.value, SimulationStateFlags.SIMULATION_READY));
    const isLoading = computed(() => FlagUtilities.hasFlag(_stateFlags.value, SimulationStateFlags.SIMULATION_LOADING));
    const gridEnabled = computed(() => FlagUtilities.hasFlag(_stateFlags.value, SimulationStateFlags.GRID_ENABLED));
    const focusChanged = computed(() => FlagUtilities.hasFlag(_stateFlags.value, SimulationStateFlags.FOCUS_CHANGE));
    const uiDisabled = computed(() => FlagUtilities.hasFlag(_stateFlags.value, SimulationStateFlags.UI_DISABLED));

    const secondaryPoolSize = computed(() => _secondaryBodyPool.value.size);
    const timeMultiplier = computed(() => _time.value.multiplier);
    const simulationEpoch = computed(() => _time.value.epoch);
    const focusedBodyName = computed(() => _focusedBody.value?.name ?? '');

    function updateTimeMultiplier(multiplier: number): void {
        enableUi(multiplier === 1);

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

    function setLoading(isLoading: boolean): void {
        if (isLoading) {
            setFlags(SimulationStateFlags.SIMULATION_LOADING);
        } else {
            clearFlag(SimulationStateFlags.SIMULATION_LOADING);
        }
    }

    function enableUi(enable: boolean): void {
        if (enable) {
            clearFlag(SimulationStateFlags.UI_DISABLED);
        } else {
            setFlags(SimulationStateFlags.UI_DISABLED);
        }
    }

    function setFocusByName(name: string): void {
        _focusedBody.value = _primaryBody.get(name);
        setFlags(SimulationStateFlags.FOCUS_CHANGE);
    }

    function setFocus(object: EnginePrimaryBody): void {
        _focusedBody.value = object;
        setFlags(SimulationStateFlags.FOCUS_CHANGE);
    }

    return {
        _focusedBody,
        _meshes,
        _secondaryBody,
        _stateFlags,
        _mousePosition,
        _cameraPosition,
        _objectsNearEarth,
        _time,
        _secondaryBodyPool,
        _secondaryBodyMeshPool,
        _primaryBody,

        timeMultiplier,
        simulationEpoch,
        isReady,
        isLoading,
        gridEnabled,
        focusChanged,
        uiDisabled,
        focusedBodyName,
        secondaryPoolSize,

        setFocus,
        setFocusByName,
        updateTimeMultiplier,
        toggleFlag,
        setFlags,
        clearFlag,
        setEpoch,
        updateSimulationClock,
        setLoading,
        enableUi,
    };
});

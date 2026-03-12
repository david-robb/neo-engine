### NEO Engine

A real-time 3D visualization and simulation engine for Near-Earth Objects (NEOs), built to render and track thousands of asteroids and their orbital paths around the Sun.

---

### Overview

NEO Engine is an interactive space simulation that visualizes the orbits of near-earth objects in our solar system. The application fetches orbital data from a database and calculates real-time positions using Keplerian orbital mechanics. Users can explore the solar system, track individual asteroids, and observe their trajectories relative to Earth and other primary bodies.

---

### Tech Stack

#### Frontend Framework
- **Vue 3** - Composition API with `<script setup>` syntax
- **TypeScript** - Full type safety throughout the codebase
- **Pinia** - State management for simulation state

#### 3D Rendering
- **Three.js** - Core 3D rendering engine
- **TresJS** (`@tresjs/core`, `@tresjs/cientos`, `@tresjs/post-processing`) - Vue 3 bindings for Three.js with additional utilities and post-processing effects
- **three-meshline** / `@lume/three-meshline` - Rendering orbital paths
- **three-mesh-bvh** - Bounding Volume Hierarchy for optimized raycasting
- **camera-controls** - Smooth camera navigation

#### Web Workers
- **Physics Worker** - Offloads orbital position calculations to a separate thread using `SharedArrayBuffer` for high-performance data sharing between the main thread and worker

#### Backend & Data
- **Supabase** - PostgreSQL database hosting NEO orbital data
- **Zod** - Schema validation

#### UI Components
- **PrimeVue** - UI component library (buttons, forms, data tables, drawers, etc.)
- **Tailwind CSS v4** - Utility-first styling
- **Tweakpane** - Debug/development controls

#### Build Tools
- **Vite** - Fast development server and build tool
- **vite-plugin-glsl** - GLSL shader imports
- **vite-plugin-cross-origin-isolation** - Enables `SharedArrayBuffer` support

#### Date/Time Handling
- **@formkit/tempo** - Date manipulation for epoch calculations

---

### Architecture

```
src/
├── features/
│   ├── simulation/
│   │   ├── components/      # Vue components (Simulation.vue)
│   │   ├── composable/      # Vue composables (camera, input, physics worker, renderer)
│   │   ├── services/        # Core Logic (database, mesh, position, velocity)
│   │   ├── stores/          # Pinia state management
│   │   ├── types/           # TypeScript interfaces
│   │   ├── utilities/       # Helper functions
│   │   └── workers/         # Web Workers (physics calculations)
│   └── ui/
│       ├── general/         # UI panels (ObjectDetails, SimulationControls, etc.)
│       └── startup/         # Startup/loading forms
├── directives/              # Custom Vue directives (unit conversions)
├── lib/                     # External library configurations
└── utility/                 # Constants and shared utilities
```

---

### Key Features

- **Real-time Orbital Mechanics** - Calculates positions using Keplerian orbital elements (eccentricity, semi-major axis, inclination, etc.)
- **Instanced Rendering** - Efficiently renders thousands of NEOs using Three.js `InstancedMesh`
- **Off-thread Physics** - Web Worker with `SharedArrayBuffer` for smooth 60fps rendering while computing orbital positions
- **Interactive Camera** - Smooth camera controls with configurable min/max distances
- **Object Selection** - Click to select and inspect individual NEOs
- **Time Control** - Adjustable simulation speed and epoch selection
- **Hazardous Object Tracking** - Visual indicators for potentially hazardous asteroids

---

### Data Model

The simulation handles two types of celestial bodies:

- **Primary Bodies** - Sun, Earth, and other planets with known orbital parameters
- **Secondary Bodies** - NEOs (asteroids) fetched from the database with full orbital data including:
    - Orbital period, eccentricity, semi-major axis
    - Inclination, ascending node longitude
    - Perihelion/aphelion distances
    - Mean anomaly and mean motion
    - Hazard classification (potentially hazardous, Sentry monitored)

---

### Requirements

- Node.js >= 20.0.0
- Modern browser with `SharedArrayBuffer` support (requires HTTPS or localhost with proper headers)
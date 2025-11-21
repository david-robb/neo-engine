import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import glsl from 'vite-plugin-glsl';
import { templateCompilerOptions } from '@tresjs/core';

// https://vite.dev/config/
export default defineConfig({
    base: '/neo-engine/',
    plugins: [
        vue({
            ...templateCompilerOptions,
        }),
        glsl(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    three: ['three'],
                },
            },
        },
    },
    optimizeDeps: {
        exclude: ['vue', 'three'],
    },
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import glsl from 'vite-plugin-glsl';
import { templateCompilerOptions } from '@tresjs/core';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    base: '/neo-engine/',
    plugins: [
        vue({
            ...templateCompilerOptions,
        }),
        tailwindcss(),
        // vueDevTools(),
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
    server: {
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        },
    },
    preview: {
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        },
    },
});

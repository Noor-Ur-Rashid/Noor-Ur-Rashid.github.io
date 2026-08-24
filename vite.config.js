import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [plugin()],

    base: '/',

    server: {
        port: 13286,
        watch: {
            ignored: ['**/.vs/**'],
        },
    }
})
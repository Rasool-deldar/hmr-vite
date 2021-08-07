// @ts-ignore
import { defineConfig } from 'laravel-vite';
import { resolve } from 'path';
// @ts-ignore
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import legacy from '@vitejs/plugin-legacy';
// @ts-ignore
import execute from 'rollup-plugin-shell';

// commands
const commandBuild = [
  'php artisan ziggy:generate',
  'cp resources/js/ziggy.js resources/assets/js/ziggy.js',
];

export default defineConfig()
  .merge({
    resolve: {
      alias: {
        '@': resolve(__dirname, 'resources'),
        '@assets': resolve(__dirname, 'resources/assets'),
        '@images': resolve(__dirname, 'resources/assets/images'),
        '@css': resolve(__dirname, 'resources/assets/css'),
        '@scss': resolve(__dirname, 'resources/assets/scss'),
        '@js': resolve(__dirname, 'resources/assets/js'),
        '@ts': resolve(__dirname, 'resources/assets/ts'),
        '@pages': resolve(__dirname, 'resources/assets/vue/pages'),
        '@layouts': resolve(__dirname, 'resources/assets/vue/Layouts'),
        '@components': resolve(__dirname, 'resources/assets/vue/components'),
        ziggy: resolve('vendor/tightenco/ziggy/dist/vue.es.js'),
      },
    },
    optimizeDeps: {
      include: [
        'vue',
        '@inertiajs/inertia',
        '@inertiajs/inertia-vue3',
        '@inertiajs/progress',
        'axios',
      ],
    },
  }).withPlugins(
    vue,
    // @ts-ignore
    execute({
        commands: commandBuild,
        hook: 'watchChange',
    }),
    execute({
        commands: commandBuild,
        hook: 'buildStart',
    }),
    execute({
        commands: ['rm -rf resources/js'],
        hook: 'buildEnd',
    })
  );

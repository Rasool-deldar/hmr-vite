/*
|--------------------------------------------------------------------------
| Main entry point
|--------------------------------------------------------------------------
| Files in the "resources/scripts" directory are considered entrypoints
| by default.
|
| -> https://vitejs.dev
| -> https://github.com/innocenzi/laravel-vite
*/
// @ts-ignore
import { themeChange } from 'theme-change';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
// @ts-ignore
import { ZiggyVue } from 'ziggy';
// @ts-ignore
import { Ziggy } from '@js/ziggy';
import '@scss/app.scss';

// create app
createInertiaApp({
  title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME}`,
  resolve: (name) => import(`../assets/vue/Pages/${name}.vue`),
  setup({
    // @ts-ignore
    el, App, props, plugin,
  }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .mount(el);
  },
});

// config InertiaProgress
InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,
  // The color of the progress bar.
  color: '#00d280',
  // Whether to include the default NProgress styles.
  includeCSS: true,
  // Whether the NProgress spinner will be shown.
  showSpinner: false,
});

themeChange(false);

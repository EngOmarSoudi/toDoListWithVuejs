import './bootstrap';
import '../css/app.css';

// import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
// var Vue = require('vue');
//
// import Vue from '@vitejs/plugins-vue';
import {createApp} from "vue";
import app from "./vue/app.vue";
// import modal from "./vue/modal.vue";
createApp(app).mount("#app");

// modal.component("modal", {
//     template: "#modal-template"
// });
//
// app.mount('#modal');
window.$ = window.jQuery = require('jquery');
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });

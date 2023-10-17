/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import Translator from './i18n';

new Translator;

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

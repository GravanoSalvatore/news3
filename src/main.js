/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import 'mdb-vue-ui-kit/css/mdb.min.css';
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

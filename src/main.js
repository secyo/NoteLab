/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp , markRaw} from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'
//router
import router from '@/router/index.js'
import { createPinia } from 'pinia'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})



const app = createApp(App).use(pinia).use(router)

registerPlugins(app)

app.mount('#app')

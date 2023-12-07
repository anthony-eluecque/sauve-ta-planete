import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { fr } from 'vuetify/locale';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';

const vuetify = createVuetify({
  components: {
    ...labsComponents,
    ...components
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  locale: {
    locale: 'fr',
    fallback: 'fr',
    messages: { fr },
  },
});

export default vuetify;

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')

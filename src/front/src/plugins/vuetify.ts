/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';
import '@mdi/font/css/materialdesignicons.css';
import { fr } from 'vuetify/locale';


const lightTheme = {
  dark: false,
  colors: {
    'main-back-color' : '#ff7676',
    'main-text-color' : '#ffffff',
    'card-back-color' : '#353168',
    'card-text-color' : '#ffffff',
    'question-back-color' : '#d9d9d9',
    'question-text-color' : '#000000',
    'button-back-color' : '#c2c2c2',
    'button-text-color ': '#1e3050',
    'bubble-back-color' : '#ffffff',
    'bubble-text-color' : '#1e3050',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
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
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
})
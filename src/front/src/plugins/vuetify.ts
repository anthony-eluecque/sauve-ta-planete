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
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'background-container': '#FFFFFF',
    'background-tr-even': '#f3f3f3',
    'background-tr-odd': '#FFFFFF',
    'background-navigation-drawer': '#242934',
    'button-logout': '#FFFFFF',
    'title-button-logout': '#4663F8'
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
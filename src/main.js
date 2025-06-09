import '@/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

/* import the UI */
import UIcomponents from '@/components/UI';
/* import the UI */

/* import the fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)
/* import the fontawesome */

/* import the vuetify */
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
const vuetify = createVuetify({ components, directives });
/* import the vuetify */

const app = createApp(App);

UIcomponents.forEach(element => {
    app.component(element.name, element);
});

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');

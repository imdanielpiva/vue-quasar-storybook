import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import Quasar from 'quasar-framework';

import QuasarBtn from '../src/stories/QBtn.vue';

import 'quasar-extras/material-icons';
import 'quasar-framework/dist/quasar.mat.css';
import 'quasar-extras/roboto-font';

Vue.use(Vuex);
Vue.use(Quasar);

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    render: h => h(require('../src/App.vue').default)
  })
});

// Import your custom components.

// Install Vue plugins.

// Register custom components.
// Vue.component('quasat-btn', QuasarBtn);
// Vue.component('d-button', DButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);

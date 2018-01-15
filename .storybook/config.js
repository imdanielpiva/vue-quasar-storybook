import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex';
import Quasar from 'quasar-framework';


import '../src/assets/style.css';
import 'quasar-extras/material-icons';
import 'quasar-framework/dist/quasar.mat.css';
import 'quasar-extras/roboto-font';

// helper for quasar start
const qAppEl = document.createElement('div');

qAppEl.setAttribute('id', 'q-app');
document.getElementsByTagName('body')[0].appendChild(qAppEl);

Vue.use(Vuex);
Vue.use(Quasar);

Quasar.start(() => {
  new Vue({
    el: '#q-app',
    render: h => h(require('../src/App.vue').default)
  });
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

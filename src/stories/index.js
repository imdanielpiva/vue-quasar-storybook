import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

// import DButton from './DButton.vue';
import QuasarBtn from './QBtn.vue';

// storiesOf('DButton', module)
//   .add('story as a component', () => ({
//     components: { DButton },
//     template: '<d-button label="Submit"/>'
//   }));

storiesOf('QuasarBtn', module)
  .add('story as a component', () => ({
    components: { QuasarBtn },
    template: '<quasar-btn>Hi, there</quasar-btn>'
  }));

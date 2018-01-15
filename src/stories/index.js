import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-router';

import { QBtn } from 'quasar-framework';

storiesOf('Welcome', module)
  .addDecorator(StoryRouter({},
    {
      initialEntry: '/',
      routes: [
        {
          path: '/',
          name: 'Welcome',
          component: load('Welcome')
        }
      ]
    }))
  .add('Introduction', () => ({
      template: '<router-view/>'
  }));

  function load (component) {
    return () => import(`./${component}.vue`)
  }

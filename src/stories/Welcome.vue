<template>
  <div class="layout-padding">
    <div>
      <h3 class="light-paragraph">Welcome to Quasar Storybook!</h3>
      <p>This a simple <a target="_blank" href="http://quasar-framework.org/">quasar-framework</a> storybook template! You can use any quasar component to build your own components, then tell your story!</p>
      <h6>Get it now, just run the following code:</h6>
      <pre>
        $ git clone https://github.com/imdanielpiva/vue-quasar-storybook.git
        $ cd vue-quasar-storybook
        $ npm install
        $ npm run storybook
      </pre>
      <p class="text-bold">It's easy to:</p>
      <ul>
        <li>Create layouts with or without router</li>
        <li>Simply show your component use case</li>
        <li>Show your component docs</li>
        <li>Have hot-reload all set up</li>
      </ul>
    </div>
    <div>
      <h4 class="light-paragraph">Simple Demo with Router</h4>
      <div id="demo">
        <h5 class="text-primary">Hi, there! I'm Hello Single File Component.</h5>
      </div>
    </div>
    <div>
      <h4 class="light-paragraph">Introduction</h4>
      <p>In order to use your components with this template, all you have to do is create your <span class="text-positive"><a target="_blank" href="https://vuejs.org/v2/guide/single-file-components.html">Vue Single File Component</a></span>...</p>
    </div>
  </div>
</template>

<script>
import {
  QItemMain
} from 'quasar-framework'

export default {
  name: 'index',
  components: {
    QItemMain
  },
  data () {
    return {
      xuxa: 'xuxa'
    };
  },
  computed: {
    computed() {
      return 'fifa 2017';
    }
  },
  methods: {
  },
  mounted () {
    console.log('HI, THERE! I\'M HELLO.VUE SINGLE FILE COMPONENT');
  }
}
</script>

<style>
  a {
    color: unset;
  }

  #demo {
    padding: 24px;
    border: 1px solid #333;
  }
</style>


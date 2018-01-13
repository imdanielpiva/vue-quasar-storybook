<template>
  <q-btn>{{ label }}</q-btn>
</template>

<script>
import { QLayout, QBtn, QIcon } from 'quasar-framework';

export default {
  name: 'quasar-btn',
  props: {
    label:{
      type: String,
      default: 'Quasar Button'
    }
  },
  components: { QBtn, QIcon, QLayout }
}
</script>

<style>

</style>

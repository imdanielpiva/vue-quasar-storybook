<template>
  <button>{{ label }}</button>
</template>

<script>
export default {
  name: 'd-button',
  props: {
    label: {
      type: String,
      default: 'Button'
    }
  }
};
</script>

<style>

</style>

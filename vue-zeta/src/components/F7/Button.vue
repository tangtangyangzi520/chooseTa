
<template>
  <button :class="`col button button-large color-white button-round`">{{config.text}}</button>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    config: {
      type: Object
    }
  }
}
</script>

<style>
</style>

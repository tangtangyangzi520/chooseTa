
<template>
  <button @click="clickEvent" :class="`col button ${info.size} ${info.round} ${info.class}`">{{info.text}}</button>
</template>

<script>
export default {
  data () {
    return {
      info: {
        text: this.config.text || 'button',
        class: this.config.class || 'button-fill',
        size: this.config.size || 'button-large',
        round: this.config.round || 'button-round'
      }
    }
  },
  props: {
    config: {
      type: Object
    }
  },
  methods: {
    clickEvent: function () {
      this.$emit('clickEvents')
    }
  }
}
</script>

<style scoped>
</style>

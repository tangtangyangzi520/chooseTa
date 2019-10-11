
<template>
  <f7-navbar back-link :title="title" >
    <f7-nav-right v-if="navRight">
      <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      default: 'Tabbar'
    },
    navRight: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
</style>

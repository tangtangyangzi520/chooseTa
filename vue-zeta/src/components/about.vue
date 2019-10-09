
<template>
  <f7-page>
    <f7-navbar title="Tabbar" back-link="Back"></f7-navbar>
    <f7-link @click="$f7router.navigate('/home')">home</f7-link>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  created: function () {
    // console.log(this.environments)
  },
  mounted () {
  }
}
</script>

<style>
</style>

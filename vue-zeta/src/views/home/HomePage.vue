<template>
  <f7-page name="homePage">
    <nav-bar title="首页" :navLeft="true"></nav-bar>
    <f7-link @click="$f7router.navigate('/login')">About</f7-link>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    console.log('homePage')
  }
}
</script>

<template>
  <f7-page no-swipeback name="homePage">
    <nav-bar title="首页" :navLeft="true"></nav-bar>
    <f7-link @click="$f7router.navigate('/login')">About</f7-link>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

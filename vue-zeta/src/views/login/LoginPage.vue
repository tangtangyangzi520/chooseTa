<template>
  <f7-page name="Login">
    <nav-bar backLink="Back"></nav-bar>
    <!-- Page content-->
    <f7-block strong><p>Login</p></f7-block>
    <f7-block-title>Login</f7-block-title>
    <f7-link @click="$f7router.navigate('/')">About</f7-link>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    console.log('Login')
  }
}
</script>

<template>
  <f7-app :params="f7params">
    <f7-view main url="/"></f7-view>
  </f7-app>
</template>

<script>
/* eslint-disable */
import routes from './router/index.js';
export default {
  data() {
    return {
      f7params: {
        routes:routes,
        name: 'zeta',
        id: 'com.zetaApp.test',
        theme: 'auto'
      }
    }
  }
}
</script>

<style>
</style>

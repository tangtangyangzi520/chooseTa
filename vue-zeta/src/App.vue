<template>
  <f7-app :params="f7params">
    <f7-view main url="/"></f7-view>
  </f7-app>
</template>

<script>
/* eslint-disable */
import routes from './router/index.js';
import Vue from 'vue'
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
  },
  created() {
    Vue.cordova.on('deviceready', () => {
      navigator.globalization.getPreferredLanguage(function (language) {          
          console.log(language + 'language: ' + language.value + '\n');
      }, function () { 
          console.log('Error getting language\n'); 
      });
    });
    
  }
}
</script>

<style>
</style>

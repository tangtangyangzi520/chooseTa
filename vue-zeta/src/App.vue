<template>
  <f7-app :params="f7params">
    <f7-view url="/login"></f7-view>
    <panel></panel>
  </f7-app>
</template>

<script>
/* eslint-disable */
import routes from './router/index';
import cordovaApp from './shared/cordova/index'
// import Vue from 'vue'
export default {
  data() {
    return {
      f7params: {
        name: 'zeta',
        id: 'com.zetaApp.test',
        theme: 'auto',
        view: {
          // iosDynamicNavbar: false,
          // xhrCache: false,
          // pushState: true,
          // pushStateSeparator: '#',
        },
        routes: [
          ...routes
        ]
      }
    }
  },
  mounted () {
    this.$f7ready((f7) => {
      console.log(f7)
      // Init cordova APIs (see cordova-app.js)
      cordovaApp.init(f7);
    });
  },
  created() {
    // Vue.cordova.on('deviceready', () => {
    //   navigator.globalization.getPreferredLanguage(function (language) {          
    //       console.log(language + 'language: ' + language.value + '\n');
    //   }, function () { 
    //       console.log('Error getting language\n'); 
    //   });
    // })
  }
}
</script>

<style>
</style>

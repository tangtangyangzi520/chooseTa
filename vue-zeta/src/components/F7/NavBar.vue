
<template>
  <f7-navbar :back-link="backLink">
    <f7-nav-left v-if="navLeft">
      <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
    </f7-nav-left>
    <f7-nav-title>{{title}}</f7-nav-title>
    <f7-nav-right v-if="navRight">
      <f7-link @click="sendChildVal" icon-ios="f7:house_fill" icon-aurora="f7:house_fill" icon-md="material:home"></f7-link>
    </f7-nav-right>
  </f7-navbar>
</template>

<script>
export default {
  data () {
    return {
      icons: {
        ios: ``
      }
    }
  },
  /**
   * @title 标题
   * @backLink 返回按钮
   * @navLeft 左边按钮(显示/隐藏)
   * @navRight 右边按钮(显示/隐藏)
   */
  props: {
    title: {
      type: String,
      default: 'Tabbar'
    },
    backLink: {
      default: false
    },
    navLeft: {
      type: Boolean,
      default: false
    },
    navRight: {
      type: Boolean,
      default: false
    },
    icon: {
      ios: {
        type: String,
        default: 'menu'
      },
      aurora: {
        type: String,
        default: 'menu'
      },
      material: {
        type: String,
        default: 'menu'
      }
    }
  },
  methods: {
    sendChildVal: function () {
      this.$emit('navRightOperate')
    }
  }
}
</script>

<style>
</style>

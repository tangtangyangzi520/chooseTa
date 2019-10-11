
<template>
  <f7-toolbar tabbar labels bottom>
    <f7-link
      v-for="(tab, index) in tabLink"
      :key="tab[index]"
      :tab-link="`#${tab.link}`"
      :tab-link-active="tab.active"
      :icon-ios="`f7:${tab.icon.ios}`"
      :icon-aurora="`f7:${tab.icon.aurora}`"
      :icon-md="`f7:${tab.icon.material}`"
      :text="tab.name"
      >
    </f7-link>
  </f7-toolbar>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    tabLink: {
      type: Array
    }
  },
  methods: {}
}
</script>

<style>
</style>

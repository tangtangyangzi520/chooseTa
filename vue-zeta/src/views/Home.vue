<template>
  <f7-page name="home" :page-content="false">
    <tabs-pages :tabId="['home', 'radio', 'message', 'users']" :active="0"></tabs-pages>
    <tool-bar :tabLink="tabLink"></tool-bar>
  </f7-page>
</template>

<script>
import TabsPages from '@/components/F7/Tabs'
export default {
  data () {
    return {
      tabLink: [
        {
          name: '首页',
          link: 'home',
          active: true,
          icon: {
            ios: 'house_fill',
            aurora: 'house_fill',
            material: 'home'
          }
        },
        {
          name: '电台',
          link: 'radio',
          active: false,
          icon: {
            ios: 'square_list_fill',
            aurora: 'square_list_fill',
            material: 'view_list'
          }
        },
        {
          name: '消息',
          link: 'message',
          active: false,
          icon: {
            ios: 'gear',
            aurora: 'gear',
            material: 'settings'
          }
        },
        {
          name: '我的',
          link: 'users',
          active: false,
          icon: {
            ios: 'menu',
            aurora: 'menu',
            material: 'menu'
          }
        }
      ]
    }
  },
  components: {
    TabsPages
  }
}
</script>

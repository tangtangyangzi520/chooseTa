
<template>
    <f7-tabs routable>
      <f7-tab v-for="(item, index) in tabId"
        :key="item"
        class="page-content"
        :tab-active="index === active"
        :id="item"
        >
        <home-page v-if="item === 'home'"></home-page>
        <radio-page v-if="item === 'radio'"></radio-page>
        <message-page v-if="item === 'message'"></message-page>
        <users-page v-if="item === 'users'"></users-page>
        </f7-tab>
    </f7-tabs>
</template>

<script>
import HomePage from '@/views/home/HomePage'
import RadioPage from '@/views/home/RadioPage'
import MessagePage from '@/views/home/MessagePage'
import UsersPage from '@/views/home/UsersPage'
export default {
  data () {
    return {}
  },
  props: {
    tabsPages: {
      type: Array
    },
    tabId: {
      type: Array
    },
    active: {
      type: Number,
      default: 0
    }
  },
  components: {
    HomePage,
    RadioPage,
    MessagePage,
    UsersPage
  }
}
</script>

<style>
</style>

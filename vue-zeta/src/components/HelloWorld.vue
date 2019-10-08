
<template>
  <f7-page :page-content="false">
    <f7-navbar title="Tabbar" back-link="Back">
      <f7-nav-right>
        <f7-link icon-ios="f7:reload" icon-md="material:compare_arrows" @click="isBottom = !isBottom"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar tabbar :position="isBottom ? 'bottom' : 'top'">
      <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
      <f7-link tab-link="#tab-2">Tab 2</f7-link>
      <f7-link tab-link="#tab-3">Tab 3</f7-link>
    </f7-toolbar>
    <f7-tabs>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
          <p>Tab 1 content</p>
          <button @click="createSheet">打卡</button>
          <div class="heig">Tab 1 {{$t('login.username')}}</div>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <p>Tab 2 content</p>
          ...
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <p>Tab 3 content</p>
          ...
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
import { query, queryPost } from '../service/http/api'
export default {
  data () {
    return {
      isBottom: true
    }
  },
  methods: {
    createSheet () {
      const notification = this.$f7.notification.create({
        title: 'John Doe',
        text: 'Hello, how are you?',
        on: {
          opened: function () {
            console.log('Notification opened')
          }
        }
      })
      notification.open()
      // const self = this
      // self.sheet = self.$f7.sheet.create({
      //   content: `
      //     <div class="sheet-modal">
      //       <div class="toolbar">
      //         <div class="toolbar-inner justify-content-flex-end">
      //           <a href="#" class="link sheet-close">Close</a>
      //         </div>
      //       </div>
      //       <div class="sheet-modal-inner">
      //         <div class="page-content">
      //           <div class="block">
      //             <p>This sheet modal was created dynamically</p>
      //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim...</p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   `.trim()
      // })
      // self.sheet.open()
    }
  },
  created: function () {
    // console.log(this.environments)
  },
  mounted () {
    query({name: 10}).then(res => {
      console.log(res, '这是get响应的结果')
    })

    queryPost({
      params: {name: 10},
      loading: true
    }).then(res => {
      console.log(res, '这是post响应的结果')
    })
  }
}
</script>

<style>
.heig{
  width: 100%;
  height: 900px;
  background: #ddd;
}
</style>

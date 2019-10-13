<template>
  <f7-page name="register">
    <nav-bar title="重置密码" backLink></nav-bar>
    <div class="reset">重置密码</div>
    <div class="input-con">
      <f7-list no-hairlines-md>
        <f7-list-input outline label="手机号" class="text-con" floating-label type="text" :value="name" @input="name = $event.target.value" placeholder="手机号" clear-button>
        </f7-list-input>
        <div class="verify-con">
          <f7-list-input outline label="验证码"  floating-label type="text" class="verify text-con" :value="code" @input="code = $event.target.value" placeholder="请输入" clear-button>
          </f7-list-input>
          <f7-button large fill class="code">获取验证码</f7-button>
        </div>
      </f7-list>
      <f7-list no-hairlines-md>
        <f7-list-input outline label="密码" class="text-con" floating-label type="text" :value="password" @input="password = $event.target.value" placeholder="密码" clear-button>
        </f7-list-input>
      </f7-list>
    </div>
    <f7-button v-on:click="openPopover" large fill class="login-btn">立即重置</f7-button>
  </f7-page>
</template>

<script>
import { dialog } from '@/components/F7/dialog'
export default {
  data () {
    return {
      name: '',
      password: '',
      code: ''
    }
  },
  methods: {
    openPopover () {
      dialog({
        button: [
          {
            text: 'X'
          },
          {
            text: 'Button 2'
          }
        ]}, (e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style scope>
  /* 全局改变 */
  .list {
    margin: 0;
    list-style: none;
  }
  .list .item-inner {
    padding-right: 0;
    padding-top:0;
  }
  .content {
    background-color: #ffffff;
  }
  .icon-back:after {
    color: #333333;
  }
  .list ul:before {
    background-color: #ffffff;
  }
  .list ul:after {
    background-color: #ffffff;
  }
  .list .item-content {
    padding-left: 0;
  }
  .list input[type="text"],
  .list input[type="password"],
  .list input[type="search"],
  .list input[type="email"],
  .list input[type="tel"],
  .list input[type="url"],
  .list input[type="date"],
  .list input[type="datetime-local"],
  .list input[type="time"],
  .list input[type="number"],
  .list select {
    height: 44px;
  }
  .button-large,
  .ios .button-large-ios,
  .md .button-large-md,
  .aurora .button-large-aurora {
    height: 45px;
  }
  .input-clear-button:before {
    display: none;
  }
  .input-clear-button {
    display: none;
  }
  /* 本页面改变 */
  .reset {
    font-size: 24px;
    color: #333333;
    font-weight: bold;
    padding: 32px 0 0 25px;
  }
  .input-con {
    position: relative;
    margin: 60px 15px;
  }
  .login-btn {
    width: 200px;
    height: 45px;
    background-color: #f8b43e;
    border-radius: 45px;
    opacity: 0.5;
    margin: 0 auto;
  }
  .bottom-text {
    width: 100%;
    font-size: 12px;
    color: #999999;
    text-align: center;
    position: absolute;
    bottom: 10px;
  }
  .bottom-text span {
    border-left: 1px solid #999999;
    margin: 10px;
  }
  .verify {
    width: 60%;
  }
  .code {
    flex: 20%;
    height: 44px;
    background-color: #f8b43e;
    border-radius: 7px;
    display: inline-block;
    margin-left: 12px;
  }
  .verify-con {
    display: flex;
    align-items: center;
  }
  .text-con{
    margin:5px 0;
  }
</style>

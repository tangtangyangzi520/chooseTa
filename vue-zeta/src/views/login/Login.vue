<template>
  <f7-page @page:afterin="init" name="Login">
    <f7-navbar title="登录" back-link></f7-navbar>
    <div class="reset">登录</div>
    <f7-list no-hairlines-md class="input-con">
      <f7-list-input outline label="登录账号" floating-label type="text" class="text-con" :value="username"  @input="username = $event.target.value" placeholder="登录账号" clear-button >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>
      <f7-list-input outline label="登录密码" floating-label type="password" class="text-con" :value="password"  @input="password = $event.target.value" placeholder="登录密码" clear-button>
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>
    </f7-list>
    <f7-button large fill class="login-btn">登录</f7-button>
    <div class="bottom-text">
      <f7-link @click="$f7router.navigate('/reset')">忘记密码</f7-link>
      <span></span>
      <f7-link @click="$f7router.navigate('/register')">马上注册</f7-link>
    </div>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    init () {
      // const bar = document.querySelector('.navbar')
      // bar.style.opacity = '1'
    }
  }
}
</script>

<style scope>
  .list{
    margin:0;
    list-style: none;
  }
  .list .item-inner{
    padding-right: 0;
    padding-top:0;
  }
  .navbar .title{
    font-size: 18px;
    color: #333333;
  }
  .content{
    background-color:#ffffff;
  }
  .icon-back:after {
    color: #333333;
  }

  .list ul:before{
      background-color:#ffffff;
  }
  .list ul:after{
      background-color:#ffffff;
  }
  .list .item-content{
    padding-left:0;
  }
  .list input[type="text"], .list input[type="password"], .list input[type="search"], .list input[type="email"], .list input[type="tel"], .list input[type="url"], .list input[type="date"], .list input[type="datetime-local"], .list input[type="time"], .list input[type="number"], .list select{
    height:44px;
  }
  .button-large, .ios .button-large-ios, .md .button-large-md, .aurora .button-large-aurora{
    height:45px;
  }
  .input-clear-button:before{
    display: none;
  }
  .input-clear-button{
    display: none;
  }
  /* 本页面改变 */

  .reset {
    font-size: 24px;
    color: #333333;
    font-weight: bold;
    padding: 32px 0 0 25px;
  }

  .input-con{
    position: relative;
    margin:60px 15px;
  }
  .login-btn{
    width: 200px;
    height: 45px;
    background-color: #f8b43e;
    border-radius: 45px;
    opacity: 0.5;
    margin:0 auto;
  }
  .bottom-text{
    width:100%;
    font-size: 12px;
    color: #999999;
    text-align: center;
    position: absolute;
    bottom:10px;
  }
  .bottom-text span{
    border-left:1px solid #999999;
    margin:10px;
  }
  .item-inner{
    margin-left:0
  }
  .text-con{
    margin:5px 0;
  }
</style>

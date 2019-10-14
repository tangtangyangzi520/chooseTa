<template>
  <f7-page :page-content="false" name="loginhome">
    <div class="cover-block">
        <div class="logo"></div>
    </div>
    <div class="field-block">
      <div class="field-btns">
        <buttons v-on:clickEvents="$f7router.navigate('/login')" :config="{text: '登录', class: 'login-fill'}"></buttons>
        <buttons v-on:clickEvents="$f7router.navigate('/register')" :config="{text: '注册', class: 'register-fill'}"></buttons>
      </div>
      <div class="other-link">
        <!-- <smart-select></smart-select> -->
        <span @click="setLanguage">语言: 简体中文<i class="f7-icons">chevron_down</i></span>
      </div>
    </div>
  </f7-page>
</template>

<script>
import popup from '../../components/F7/popup'
export default {
  data () {
    return {}
  },
  methods: {
    setLanguage () {
      popup((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scope lang="scss">
  .cover-block{
    position: relative;
    height: 100%;
    background: url('./img/cover.jpg') no-repeat center center;
    background-size: cover;
  }
  .logo{
    position: absolute;
    top: 2.07rem;
    width: 3.36rem;
    height: 1.33rem;
    left: 50%;
    margin-left: -1.68rem;
    background: url('./img/cover_logo.png') no-repeat center center;
    background-size: 100% 100%;
  }
  .field-block{
    position: absolute;
    bottom: 0.88rem;
    left: 0.3rem;
    right: 0.3rem;
  }
  .login-fill{
    margin-bottom: 0.3rem;
    color: var(--theme333);
    background: var(--themefff);
  }
  .register-fill{
    color: var(--themefff);
    margin-bottom: 0.86rem;
    background: var(--theme7f7e84);
  }
  .other-link{
    text-align: center;
    color: #fff;
    line-height: 0.24rem;
    .f7-icons{
      font-size: 0.36rem;
      vertical-align: bottom;
      margin-left: 0.36rem
    }
  }
</style>

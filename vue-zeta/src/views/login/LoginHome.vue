<template>
  <f7-page :page-content="false" name="loginhome">
    <nav-bar></nav-bar>
    <div class="cover-block">
        <div class="logo"></div>
    </div>
    <div class="field-block">
      <div class="field-btns">
        <buttons v-on:clickEvents="$f7router.navigate('/login')" :config="{text: '登录', class: 'login-fill'}"></buttons>
        <buttons v-on:clickEvents="$f7router.navigate('/register')" :config="{text: '手机号注册', class: 'register-fill'}"></buttons>
      </div>
      <div class="other-link">
        <span @click="setLanguage">语言: 简体中文<span class="valueEl"></span></span>
        <f7-list-item title="Fruit" smart-select>
          <select name="fruits">
            <option value="apple" selected>Apple</option>
            <option value="pineapple">Pineapple</option>
            <option value="pear">Pear</option>
            <option value="orange">Orange</option>
            <option value="melon">Melon</option>
            <option value="peach">Peach</option>
            <option value="banana">Banana</option>
          </select>
        </f7-list-item>
      </div>
    </div>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    setLanguage () {
      const smartSelect = this.$f7.smartSelect
      const res = smartSelect.create({
        el: '.smart-select',
        pageTitle: '123',
        openIn: 'popup',
        on: {
          opened: function () {
            console.log('Smart select opened')
          }
        }
      }).open()
      console.log(this.$f7route)
    }
  },
  mounted () {
    this.$f7ready((f7) => {
      console.log(f7.device)
    })
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
    color: #fff;
    background: #ddd;
  }
  .register-fill{
    color: #fff;
    margin-bottom: 0.3rem;
    background: var(--themeColor);
  }
  .other-link{
    text-align: center;
    color: #fff;
  }
</style>

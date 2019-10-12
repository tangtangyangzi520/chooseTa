<template>
  <f7-page name="loginhome">
    <div class="cover-block">
        <div class="logo"></div>
    </div>
    <div class="field-block">
      <div class="field-btns">
        <button class="col button button-large color-white button-round">登录</button>
        <button class="col button button-large button-fill button-round">注册</button>
      </div>
      <div class="other-link">
        语言: 简体中文
      </div>
    </div>
    <!-- <nav-bar title="loginhome"></nav-bar>
    <f7-link @click="$f7router.navigate('/login')">About</f7-link> -->
  </f7-page>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted: function () {
    console.log('loginhome', this)
  }
}
</script>

<style scoped lang="scss">
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
    left: 0.15rem;
    right: 0.15rem;
  }
</style>

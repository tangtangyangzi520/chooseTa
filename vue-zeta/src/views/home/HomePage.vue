<template>
  <f7-page no-swipeback :page-content="false" name="homePage">
    <nav-bar title="首页" :navLeft="true"></nav-bar>
    <div class="page-content">
      <f7-link @click="$f7router.navigate('/login')">About</f7-link>
    </div>
  </f7-page>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

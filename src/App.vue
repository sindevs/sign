<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#App {
  font-family: "NotoSansLao";
}
// Import Main styles for this application
@import "assets/scss/style";
@import "assets/scss/font.scss";
</style>

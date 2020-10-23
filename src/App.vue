<template>
  <div id="app">
    <vue-progress-bar />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
#app {
  font-family: "NotoSansLao";
}
.swal2-popup {
  font-family: "NotoSansLao";
}

@import "assets/scss/style";
@import "assets/scss/font.scss";
</style>

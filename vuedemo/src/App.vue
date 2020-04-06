<template>
  <div>
    <router-view></router-view>
    <b-overlay :show="lockScreen" no-wrap></b-overlay>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    }
  },
  computed: {
    lockScreen: function () {
      return this.$store.state.lockScreen
    }
  },
};
</script>

<style>
@import url('./styles/appStyle.css');
</style>

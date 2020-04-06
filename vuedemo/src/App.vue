<template>
  <div>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-h="center">
        <img alt="Vue logo" src="./assets/logo.png" />
      </b-row>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style></style>

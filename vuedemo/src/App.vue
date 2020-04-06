<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row align-h="center">
      <img alt="Vue logo" src="./assets/logo.png" />
    </b-row>
    <b-row align-h="center">
        <b-col cols="8">
          <LoginPage />
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LoginPage from "./view/LoginPage.vue";

export default {
  name: "App",
  components: {
    LoginPage,
  },
};
</script>

<style></style>

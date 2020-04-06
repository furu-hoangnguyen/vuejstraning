<template>
  <div>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-h="center">
        <img alt="Vue logo" src="../assets/logo.png" />
      </b-row>
      <b-row align-h="center">
        <b-col cols="8">
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="formLogin.name"
                type="text"
                required
                placeholder="Enter Name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your PassWord:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                v-model="formLogin.password"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {};
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.blockScreen();
      this.$store.dispatch("LoginModule/act_loginUser").then(() => {
        this.unlockScreen();
      });
    },
  },
  computed: {
    formLogin: function () {
      return this.$store.state.LoginModule.formLogin;
    },
  },
};
</script>

<style scoped></style>

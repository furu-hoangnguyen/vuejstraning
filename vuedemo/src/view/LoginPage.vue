<template>
  <div>
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

      <b-form-group id="input-group-2" label="Your PassWord:" label-for="input-2">
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
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: "LoginPage",
  data() {
    return {
      show: true
    }
  },
  methods: {
    ...mapActions('LoginModule',['act_loginUser']),
    onSubmit(evt) {
      evt.preventDefault();
      this.act_loginUser();
    },
  },
  computed: {
    ...mapState('LoginModule',['formLogin'])
  },
};
</script>

<style scoped></style>

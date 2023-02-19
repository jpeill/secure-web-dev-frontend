<template>
    <div>
      <h1>LOGIN</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="username" />
        <br />
        <br />
        <input v-model="password" placeholder="password" type="password" />
        <br />
        <br />
        <button type="submit">Connexion</button>
        <br />
        <br />
      </form>
      <router-link to="/register"><button>S'inscrire</button></router-link>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
  methods: {
    ...mapActions(['setToken']),
    async login() {
      try {
        const response = await axios.post(`${process.env.BACK_URL}/users/login`, {
          username: this.username,
          password: this.password,
        });
        this.setToken(response.data.jwt);
      } catch (error) {
        console.error(error);
      }
      this.$router.push("/");
    },
    
  },

};

</script>
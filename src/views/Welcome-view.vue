<template>
  <div>
    Bienvenue
    <router-link v-if="!isLoggedIn" to="/login"><button>Afficher les locations</button></router-link>
    <router-link v-if="isLoggedIn" to="/locations"><button>Afficher les locations</button></router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  }
};

</script>
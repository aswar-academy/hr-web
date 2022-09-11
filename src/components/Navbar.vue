<template>
  <v-app-bar color="#232F49" app>
    <v-row class="px-5">
      <h2 style="color: #ffd831">A</h2>
      <h2 class="white--text">swar hr dashboard</h2>
    </v-row>

    <v-btn flat color="#FFD831" text @click="logout">
      <span>Sign Out</span>
      <v-icon right>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
import { TOKEN } from "../utils/keys";
export default Vue.extend({
  name: "App",
  methods: {
    logout() {
      localStorage.removeItem(TOKEN);
      this.$router.push("/login");
    },
  },
  data: () => ({
    collapseOnScroll: true,
  }),
});
</script>
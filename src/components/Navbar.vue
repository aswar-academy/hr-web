<template>
  <v-app-bar color="#232F49" app>
    <v-row class="px-5">
      <h2 style="color:#FFD831;">A</h2>
      <h2 class="white--text">swar hr dashboard</h2>
    </v-row>

    <v-btn rounded="20" color="#FFD831" flat small>
      <v-icon>mdi-plus</v-icon>Add new employee
    </v-btn>
    <v-btn flat color="#FFD831" text>
      <span>Sign Out</span>
      <v-icon right>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",

  data: () => ({
    collapseOnScroll: true
  })
});
</script>
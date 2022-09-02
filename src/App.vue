<template>
  <v-app>
<Navbar v-if="hide"/>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue'
export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
   computed: {
    hide() {
      return this.$route.path !== "/login";
    },
  },
  components:{Navbar}
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap');

h1,
p,
strong,
h3 {
  font-family: 'Vazirmatn', sans-serif;
}
</style>
<template>
  <v-app>


    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
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
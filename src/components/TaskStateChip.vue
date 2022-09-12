<template>
  <v-chip v-if="state == 'TODO'" color="yellow" filter>{{ state }}</v-chip>
  <v-chip v-else-if="state == 'DOING'" color="red" filter>{{ state }}</v-chip>
  <v-chip v-else-if="state == 'DONE'" color="green" filter>{{ state }}</v-chip>
</template>
<script lang="ts">
import Vue from "vue";
import { Task } from "../client";

export default Vue.extend({
  props: {
    state: { type: String as () => Task.state },
  },
});
</script>
<style>
</style>
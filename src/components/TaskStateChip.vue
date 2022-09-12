<template>
  <v-chip v-if="selectedState" :color="selectedState.color" filter>{{
    selectedState.title
  }}</v-chip>
</template>
<script lang="ts">
import Vue from "vue";
import { Task } from "../client";
import { getSelectedState } from "../ui/state";

export default Vue.extend({
  computed: {
    selectedState() {
      return getSelectedState(this.state);
    },
  },
  props: {
    state: { type: String as () => Task.state },
  },
});
</script>
<style>
</style>
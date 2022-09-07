<template>
  <v-card style="border-radius: 12px" elevation="7" class="pa-2 ma-5" @click="goToUserProfile">
    <v-row align="center" justify="center" class="pt-3">
      <v-avatar size="100">
        <v-img src="../assets/user-avatar.svg"></v-img>
      </v-avatar>
    </v-row>
    <div style="text-align: center" class="py-5">
      <h3>{{ user.name }}</h3>
      <a href="mailto:user.email" style="text-decoration: none;">
        <p class="text-truncate">{{ user.email }}</p>
      </a>

      <p style="color: #bdc0ca">{{ user.jobTitle }}</p>
    </div>
    <div style="background-color: #f2f8fd; border-radius: 6px">
      <v-row class="ma-0 pa-0" justify="space-between">
        <p class="ma-2" style="color: #bdc0ca">Department</p>
        <p class="ma-2" style="color: #bdc0ca">The date of join</p>
      </v-row>
      <v-row class="ma-0 pa-0" justify="space-between">
        <p class="ma-2" style="color: #6f7376">{{ user.department.name }}</p>
        <p class="ma-2" style="color: #6f7376">{{ user.createdAt | formatDate }}</p>
      </v-row>
    </div>
  </v-card>
</template>
  
<script lang="ts">
import { UserData } from "@/client";
import Vue from "vue";

export default Vue.extend({
  name: "App",

  props: {
    user: {
      type: Object as () => UserData,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data: () => ({}),
  methods: {
    goToUserProfile() {
      this.$router.push("/user/" + this.id);
    }
  }
});
</script>

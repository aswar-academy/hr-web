<template>
  <v-card
    style="border-radius: 12px"
    elevation="7"
    class="pa-2 ma-5"
    @click="goToUserProfile"
  >
    <div id="user-div" class="mb-10">
      <strong style="color: #2dd8b9">{{ user.theCondition }}</strong>
    </div>
    <v-row align="center" justify="center">
      <v-avatar size="100">
        <v-img src="../assets/user-photo.svg"></v-img>
      </v-avatar>
    </v-row>
    <div style="text-align: center" class="py-5">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>

      <p style="color: #bdc0ca">{{ user.jobTitle }}</p>
    </div>
    <div style="background-color: #f2f8fd; border-radius: 6px">
      <v-row class="ma-0 pa-0" justify="space-between">
        <p class="ma-2" style="color: #bdc0ca">Department</p>
        <p class="ma-2" style="color: #bdc0ca">The date of join</p>
      </v-row>
      <v-row class="ma-0 pa-0" justify="space-between">
        <p class="ma-2" style="color: #6f7376">{{ user.department.name }}</p>
        <p class="ma-2" style="color: #6f7376">{{ user.createdAt }}</p>
      </v-row>
    </div>
  </v-card>
</template>
  
<script lang="ts">
import { UserDto } from "@/client";
import Vue from "vue";

export default Vue.extend({
  name: "App",

  props: {
    user: {
      type: Object as () => UserDto,
      required: true,
    },
  },
  data: () => ({}),
  methods: {
    goToUserProfile() {
      this.$router.push("/user-profile/" + this.user.id);
    },
  },
});
</script>
  <style>
#user-div {
  background-color: #cef7e3;
  border-radius: 2px;
  width: 70px;
  text-align: center;
  border-color: #2dd8b9;
  border-style: solid;
  border-width: 1px;
  height: 25px;
}
</style>
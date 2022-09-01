<template>
  <v-card style="border-radius: 12px;" elevation="7" class="pa-2 ma-5" @click="goToUserProfile">
    <div id="user-div" class="mb-10">
      <strong style="color: #2dd8b9;">{{ user.theCondition }}</strong>
    </div>
    <v-row align="center" justify="center">
      <v-avatar size="100">
        <v-img src="../assets/user-photo.svg"></v-img>
      </v-avatar>
    </v-row>
    <div style="text-align:center;" class="py-5">
      <h3>{{ user.name }}</h3>
      <p style="color:#BDC0CA;">{{ user.job }}</p>
    </div>
    <div style="  background-color: #F2F8FD; border-radius:6px;">
      <v-row class="ma-0 pa-0" justify="space-between">
        <p class="ma-2" style="color:#BDC0CA;">department</p>
        <p class="ma-2" style="color:#BDC0CA;">the date of join</p>
      </v-row>
      <v-row class="ma-0 pa-0" justify="space-between">
        <p class="ma-2" style="color:#6F7376;">{{ user.department }}</p>
        <p class="ma-2" style="color:#6F7376;">{{ user.theDateOfJoin }}</p>
      </v-row>
    </div>
  </v-card>
</template>
  
  <script lang="ts">
import Vue from "vue";
import user from "../UserInfo";
export default Vue.extend({
  name: "App",

  data: () => ({
    user: user
  }),
  methods: {
    goToUserProfile() {
      this.$router.push("/user-profile/" + user.id);
    }
  }
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
<template>
  <div class="pa-10">
    <v-row>
      <v-col cols="1">
        <v-avatar size="100">
          <v-img src="../assets/user-photo.svg"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="pl-10" cols="3">
        <h3>{{ user.name }}</h3>
        <p style="color:#6F7376;">
          <v-icon class="mr-1">mdi-code-tags</v-icon>
          {{ user.department }} department
        </p>
        <p style="color:#6F7376;">
          a web developer in aswar academy
          <br />in Development department .....
        </p>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="pt-10" justify="center" align="center">
      <v-col>
        <p>
          <v-icon class="mr-1">mdi-av-timer</v-icon>
          <strong>3 Years Job</strong>
        </p>
        <p style="color:#6F7376;">experience</p>
      </v-col>
      <v-col>
        <p>
          <v-icon class="mr-1">mdi-calendar-range</v-icon>
          <strong>The date of join</strong>
        </p>
        <p style="color:#6F7376;">{{ user.theDateOfJoin }}</p>
      </v-col>
      <v-col>
        <div id="user-div2">
          <strong style="color: #D82D37;">The number of absences</strong>
        </div>
        <p style="color:#6F7376; text-align:">20</p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import user from "../UserInfo";

export default Vue.extend({
  name: "App",

  data: () => ({
    user: user
  })
});
</script>
<style>
#user-div2 {
  background-color: #f7cece;
  border-radius: 2px;
  width: 200px;
  text-align: center;
  border-color: #d82d37;
  border-style: solid;
  border-width: 1px;
}
</style>
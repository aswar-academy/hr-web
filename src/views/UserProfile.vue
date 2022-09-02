<template>
  <div class="pa-10">
    <v-row>
      <v-col cols="2">
        <v-avatar size="200">
          <v-img src="../assets/user-photo.svg"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="pl-10" cols="3" align-self="center">
        <h3>{{ user.name }}</h3>
        <p class="text--secondary">
          a web developer in aswar academy
          <br />in Development department
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <p class="overline text--disabled pt-4 ma-0">employee record</p>
        <v-divider width="200"></v-divider>
        <div class="pt-4">
          <p style="color:#6F7376;">
            <v-icon class="mr-1">mdi-code-tags</v-icon>
            {{ user.department }} department
          </p>
          <div>
            <v-icon class="mr-1">mdi-av-timer</v-icon>
            <strong>3 Years Job</strong>

            <p class="pl-7 text--secondary">experience</p>
          </div>
          <div>
            <v-icon class="mr-1">mdi-calendar-range</v-icon>
            <strong>The date of join</strong>

            <p class="pl-7 text--secondary">{{ user.theDateOfJoin }}</p>
          </div>
          <div>
            <v-container id="user-div2" class="pa-0 ma-0">
              <strong style="color: #D82D37;">The number of absences</strong>
            </v-container>
            <p class="text--secondary pl-7 pt-2">20 in this month</p>
          </div>
        </div>
      </v-col>
      <v-col cols="5" class="pl-16">
        <p class="overline text--disabled pt-4 ma-0">employee Tasks</p>
        <v-divider width="200"></v-divider>
        <v-container id="task-container" class="mt-5">
          <p>Create hr-web project and repository to aswar dashboard</p>
        </v-container>
        <v-container id="task-container" class="mt-5">
          <p>Create hr-web project and repository to aswar dashboard</p>
        </v-container>
        <v-container id="task-container" class="mt-5">
          <p>Create hr-web project and repository to aswar dashboard</p>
        </v-container>
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
  width: 200px;
  border-radius: 2px;
  text-align: center;
  border-color: #d82d37;
  border-style: solid;
  border-width: 1px;
}
#task-container{
  border: #FFCD29 1px solid;
 border-color: #FFCD29;
 border-radius: 10px;
}
</style>
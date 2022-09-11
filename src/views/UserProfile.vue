<template>
  <div>
    <v-row align="center" justify="center" class="pt-10">
      <v-progress-circular size="60" color="#FFD831" v-if="loading" indeterminate></v-progress-circular>
    </v-row>
    <div v-if="user == null"></div>
    <div class="pa-10" v-else>
      <v-row>
        <v-col cols="2">
          <v-avatar size="200">
            <v-img src="../assets/user-avatar.svg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="pl-10" cols="3" align-self="center">
          <h3>{{ user.name }}</h3>

          <p class="text--secondary">{{ user.jobTitle }}</p>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="3">
          <p class="overline text--disabled pt-4 ma-0">employee record</p>
          <v-divider width="200"></v-divider>
          <div class="pt-4">
            <a href="https://academy.aswar.iq/" style="text-decoration: none">
              <p class="text--secondary " >
                <v-icon class="mr-1">mdi-web</v-icon>Aswar Academy
              </p>
            </a>
          </div>
          <div>
            <p style="color: #6f7376">
              <v-icon class="mr-1">mdi-code-tags</v-icon>
              {{ user.department.name }} department
            </p>

            <div>
              <v-icon class="mr-1">mdi-calendar-range</v-icon>
              <strong>The date of join</strong>

              <p class="pl-7 text--secondary">{{ user.createdAt | formatDate }}</p>
            </div>
            <div>
              <a href="mailto:user.email" style="text-decoration: none">
                <p class="text-truncate">
                  <v-icon class="mr-1">mdi-email</v-icon>
                  {{ user.email }}
                </p>
              </a>
            </div>
          </div>
        </v-col>

        <v-col cols="5">
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
        <v-col>
          <p class="overline text--disabled pt-4 ma-0">employee Attendance</p>
          <v-divider width="200"></v-divider>

          <div v-for="item in user.attendance" :key="item.id" class="mt-5">
            <p>
              <strong class="pr-2">Attendance time</strong>
              {{ item.createdAt | formatAttendanceDate }}
            </p>
            <p>
              <strong class="pr-2">Work end time</strong>
              {{item.departureTime | formatAttendanceDate}}
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { UserDetail, UsersService } from "@/client";
import Vue from "vue";
interface UserProfileData {
  user?: UserDetail | null;
  id?: number | null;
  loading: boolean;
}
export default Vue.extend({
  name: "App",

  data(): UserProfileData {
    return {
      user: null,
      id: null,
      loading: true
    };
  },
  methods: {
    getUser() {
      this.loading = true;
      if (this.id) {
        UsersService.usersControllerFindOne(this.id).then(value => {
          this.user = value;
          this.id = value.id;
        });
      }
      this.loading = false;
    }
  },
  created() {
    this.id = (this.$route.params.id as unknown) as number;
    this.getUser();
  }
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
#task-container {
  border: #ffcd29 1px solid;
  border-color: #ffcd29;
  border-radius: 10px;
}
</style>
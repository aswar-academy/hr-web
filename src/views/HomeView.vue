<template>
  <div>
    <UserCreateView @userCreated="getUsers" />
    <v-container>
      <v-row no-gutters>
        <template v-for="user in users">
          <v-col :key="user.id" cols="12" md="3">
            <UserCard :user="user" :id="user.id" />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { User, UsersService } from "@/client";
import UserCard from "@/components/UserCard.vue";
import UserCreateView from "@/components/UserCreateView.vue";
import Vue from "vue";

interface HomeViewData {
  users: Array<User>;
}
export default Vue.extend({
  components: {
    UserCard,
    UserCreateView,
  },
  data: function (): HomeViewData {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      this.users = await UsersService.usersControllerFindAll("USER");
    },
  },
  created() {
    this.getUsers();
  },
});
</script>

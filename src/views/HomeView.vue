<template>
  <div>
    <UsersFilter @rolesChanged="rolesChanged" />

    <UserCreateView @userCreated="getUsers" />

    <v-container>
      <v-row no-gutters>

        <v-col v-for="user in users" :key="user.id" cols="12" md="3">
          <UserCard :user="user" :id="user.id" />
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { User, UsersService } from "@/client";
import UserCard from "@/components/UserCard.vue";
import UserCreateView from "@/components/UserCreateView.vue";
import UsersFilter from "@/components/UsersFilter.vue";
import Vue from "vue";

interface HomeViewData {
  users: Array<User>;
}
export default Vue.extend({
  components: {
    UserCard,
    UserCreateView,
    UsersFilter,
  },
  data: function (): HomeViewData {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers(role: User.role = User.role.USER) {
      const data = await UsersService.findAll(role, 0, 25);
      this.users = data.results;
    },
    rolesChanged(role: User.role) {
      this.getUsers(role);
    },
  },

  created() {
    this.getUsers(User.role.USER);
  },
});
</script>

<template>
  <div>
    <v-container>
      <v-btn rounded="20" color="#f2f8fd" flat small class="ml-6">
        <v-icon>mdi-plus</v-icon>Add new employee
      </v-btn>
      <v-row no-gutters>
        <template v-for="(user) in users">
          <v-col :key="user.id" cols="12" md="3">
            <UserCard :user="user" :id="user.id" />
          </v-col>
        </template>
      </v-row>
    </v-container>
    
  </div>
</template>

<script lang="ts">
import { UserDto, UsersService } from "@/client";
import UserCard from "@/components/UserCard.vue";
import Vue from "vue";

interface HomeViewData {
  users: Array<UserDto>;
}
export default Vue.extend({
  components: {
    UserCard
  },
  data: function(): HomeViewData {
    return {
      users: []
    };
  },
  created: async function() {
    this.users = await UsersService.usersControllerFindAll("USER");
  }
});
</script>

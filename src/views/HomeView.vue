<template>
  <div>
    <v-container>
      
      <v-btn rounded="20" color="#f2f8fd" flat small>
      <v-icon>mdi-plus</v-icon>Add new employee
    </v-btn>
      <v-row no-gutters align="center" justify="center">
        <template v-for="(user, n) in users">
          <v-col :key="user.id" cols="12" md="3">
            <UserCard :user="user" :id="user.id" />
          </v-col>
          <v-responsive v v-if="n / 2 === 0" :key="`width-${user}`" width="100%"></v-responsive>
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

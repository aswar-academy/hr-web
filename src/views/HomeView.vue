<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <template v-for="(user, n) in users">
          <v-col :key="user.id">
            <UserCard :user="userModel" />
          </v-col>
          <v-responsive
            v-if="n % 4 === 0"
            :key="`width-${user}`"
            width="100%"
          ></v-responsive>
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
  userModel: string;
}
export default Vue.extend({
  components: {
    UserCard,
  },
  data: function (): HomeViewData {
    return {
      users: [],
      userModel: "",
    };
  },
  created: async function () {
    this.users = await UsersService.usersControllerFindAll("USER");
  },
});
</script>

<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <template v-for="n in 12">
          <v-col :key="n">
            <UserCard />
          </v-col>
          <v-responsive
            v-if="n % 4 === 0"
            :key="`width-${n}`"
            width="100%"
          ></v-responsive>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UserCard from "@/components/UserCard.vue";
import { AuthService, UsersService } from "@/client";

export default Vue.extend({
  components: {
    UserCard,
  },
  created: () => {
    UsersService.usersControllerFindAll("USER");
  },
  data: () => ({}),
});
</script>

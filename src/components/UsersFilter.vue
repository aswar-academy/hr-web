<template>
  <v-row align="center" justify="center" class="mt-5">
    <v-col cols="12" md="2">
      <v-autocomplete
        label="User Types"
        clearable
        outlined
        :items="roles"
        v-model="role"
        @change="onFilterChange"
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>
<script lang="ts">
interface UserFilterData {
  role?: User.role;
  roles: Array<User.role>;
}
import Vue from "vue";
import { User, CreateUser } from "../client";
export default Vue.extend({
  data(): UserFilterData {
    return {
      role: User.role.USER,
      roles: Object.values(User.role)
    };
  },
  props: {
    users: {
      type: Array
    }
  },
  methods: {
    onFilterChange(role: User.role) {
      this.$emit("rolesChanged", role);
    }
  }
});
</script>
<style>
#div {
  text-align: center;
  align-self: center;
}
</style>
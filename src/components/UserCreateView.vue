<template>
  <div class="pt-5">
    <v-btn
      rounded="20"
      color="#f2f8fd"
      flat
      small
      class="ml-6"
      @click="dialogCreate = true"
    >
      <v-icon>mdi-plus</v-icon>Add new employee
    </v-btn>
    <v-dialog
      v-model="dialogCreate"
      fullscreen
      hide-overlay
      transition="dialog-top-transition"
    >
      <v-card>
        <v-toolbar dark color="#f2f8fd">
          <v-btn icon dark @click="dialogCreate = false">
            <v-icon color="#232F49">mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title style="color: #232f49"
            >Add New employee</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text color="#232F49" @click="createUser">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container class="pt-5">
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                outlined
                ref="name"
                v-model="userCreate.name"
                label="Employee Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                outlined
                ref="email"
                :rules="email"
                label="Email"
                name="email"
                type="email"
                required
                v-model="userCreate.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                outlined
                ref="password"
                :rules="password"
                label="Password"
                name="password"
                type="password"
                required
                v-model="userCreate.password"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="4">
              <v-autocomplete
                label="Roles"
                clearable
                :items="roles"
                outlined
                v-model="userCreate.role"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                outlined
                ref="jobTitle"
                v-model="userCreate.jobTitle"
                label="Job title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                outlined
                ref="salary"
                v-model="userCreate.salary"
                label="Salary"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                outlined
                ref="departmentId"
                v-model="departmentId"
                label="Department"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { UsersService, CreateUser } from "@/client";
import { UserRole } from "@/types/role";
import { Validation } from "@/types/Validation";
import { emailValidation, passwordValidation } from "@/utils/Validation";
interface UserCreateView {
  dialogCreate: boolean;
  email: Validation;
  password: Validation;
  userCreate: CreateUser;
  roles: Array<UserRole>;
  departmentId: number;
}
export default Vue.extend({
  data(): UserCreateView {
    return {
      dialogCreate: false,
      roles: Object.values(UserRole),
      email: emailValidation,
      password: passwordValidation,
      userCreate: {
        email: "test123@gmail.com",
        password: "12345678",
        salary: 1234,
        departmentId: 1,
        name: "test",
        role: "USER",
        jobTitle: "test",
      } as CreateUser,
      departmentId: 1,
    };
  },
  methods: {
    createUser(): void {
      UsersService.usersControllerCreate(this.userCreate).then(() => {
        this.dialogCreate = false;
        this.$emit("userCreated");
      });
    },
  },
});
</script>
<template>
  <v-container class="pa-0">
    <v-btn
      color="#ffd831"
      dark
      fixed
      fab
      class="mt-5"
      @click="dialogCreate = true"
      elevation="1"
      left
    >
      <v-icon color="#232F49">mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialogCreate" fullscreen hide-overlay transition="dialog-top-transition">
      <v-card>
        <v-toolbar dark color="#f2f8fd">
          <v-btn icon dark @click="dialogCreate = false">
            <v-icon color="#232F49">mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title style="color: #232f49">Add New employee</v-toolbar-title>
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
            <v-col cols="12" md="3">
              <v-autocomplete
                label="Department"
                clearable
                outlined
                :items="departments"
                item-text="name"
                item-value="id"
                v-model="userCreate.departmentId"
              ></v-autocomplete>
            </v-col>
           
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script lang="ts">
import {
  CreateUser,
  Department,
  DepartmentsService,
  PaginatedDepartment,
  UsersService
} from "@/client";
import { Validation } from "@/types/Validation";
import { emailValidation, passwordValidation } from "@/utils/Validation";
import Vue from "vue";
interface UserCreateData {
  dialogCreate: boolean;
  email: Validation;
  password: Validation;
  userCreate: CreateUser;
  roles: Array<CreateUser.role>;

  departments: Array<Department>;
}
export default Vue.extend({
  data(): UserCreateData {
    return {
      dialogCreate: false,
      roles: Object.values(CreateUser.role),
      email: emailValidation,
      password: passwordValidation,
      userCreate: {
        salary: 0
      } as CreateUser,
      departments: []
    };
  },
  methods: {
    createUser(): void {
      UsersService.create(this.userCreate).then(() => {
        this.dialogCreate = false;
        this.$emit("userCreated");
      });
    },
    getDepartment() {
      DepartmentsService.findAll(0, 25).then((value: PaginatedDepartment) => {
        this.departments = value.results;
      });
    }
  },
  created() {
    this.getDepartment();
  }
});
</script>
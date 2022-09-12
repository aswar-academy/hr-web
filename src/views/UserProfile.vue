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
          <p class="text--secondary">{{ user.role }}</p>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="3">
          <p class="overline text--disabled pt-4 ma-0">employee record</p>
          <v-divider width="200"></v-divider>
          <div class="pt-4">
            <a href="https://academy.aswar.iq/" style="text-decoration: none">
              <p class="text--secondary">
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
          <p class="overline text--disabled pt-4 ma-0">
            employee Tasks
            <v-btn color="#ffd831" small elevation="2" rounded="30" @click="createTaskDialog=true">
              <v-icon color="#232F49">mdi-plus</v-icon>
            </v-btn>
          </p>
          <v-divider width="200"></v-divider>
          <v-container
            id="task-container"
            class="mt-5"
            v-for="task in user.tasks"
            :key="task.id"
            @click="selectedTask=task"
          >
            <v-row class="pa-3" justify="space-between">
              <strong>{{ task.title }}</strong>
              <p class="text--secondary">{{task.createdAt|formatAttendanceDate}}</p>
            </v-row>

            <p>{{task.description}}</p>
            <p class="overline text--disabled pt-4 ma-0">{{task.state}}</p>
          </v-container>
        </v-col>
        <v-col class="pl-16">
          <p class="overline text--disabled pt-4 ma-0">employee Attendance</p>
          <v-divider width="200"></v-divider>

          <div v-for="item in user.attendance" :key="item.id" class="mt-5">
            <p>
              <strong class="pr-2">Attendance time</strong>
              {{ item.createdAt | formatAttendanceDate }}
            </p>
            <p>
              <strong class="pr-2">Work end time</strong>
              {{ item.departureTime | formatAttendanceDate }}
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="createTaskDialog" fullscreen hide-overlay transition="dialog-top-transition">
      <v-card>
        <v-toolbar dark color="#f2f8fd">
          <v-btn icon dark @click="createTaskDialog = false">
            <v-icon color="#232F49">mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title style="color: #232f49">Add New Task</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text color="#232F49" @click="createTask">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container class="pt-5">
          <v-row>
            <v-col cols="12" md="4">
              <v-autocomplete
                label="States"
                clearable
                :items="states"
                outlined
                v-model="taskCreate.state"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                outlined
                ref="title"
                v-model="taskCreate.title"
                label="Task Title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-textarea
                outlined
                name="input-7-4"
                label="Description"
                v-model="taskCreate.description"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="selectedTask"
      v-if="selectedTask"
      scrollable
      persistent
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title primary-title>{{selectedTask.title}}</v-card-title>
        <v-card-text>
          <v-col cols="12" md="4">
            <v-autocomplete
              label="States"
              clearable
              :items="states"
              outlined
              v-model="selectedTask.state"
            ></v-autocomplete>
          </v-col>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="selectedTask = null">Close</v-btn>
          <v-btn text @click="editStateTask">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {
  UserDetail,
  UsersService,
  TasksService,
  CreateTask,
  Task
} from "@/client";
import Vue from "vue";
interface UserProfileData {
  user?: UserDetail | null;
  id?: number | null;
  loading: boolean;
  createTaskDialog: boolean;
  taskCreate: CreateTask;
  states: Array<CreateTask.state>;
  selectedTask: null | Task;
}
export default Vue.extend({
  name: "App",

  data(): UserProfileData {
    return {
      user: null,
      id: null,
      loading: true,
      createTaskDialog: false,
      taskCreate: {} as CreateTask,
      states: Object.values(CreateTask.state),
      selectedTask: null
    };
  },
  methods: {
    getUser() {
      this.loading = true;
      if (this.id) {
        UsersService.findOne(this.id).then(value => {
          this.user = value;
          this.id = value.id;
        });
      }
      this.loading = false;
    },
    createTask() {
      this.taskCreate.userId = this.id!;
      TasksService.create(this.taskCreate).then(() => {
        this.createTaskDialog = false;
        this.getUser();
      });
    },
    editStateTask(): void {
      TasksService.markAs(this.selectedTask!.id, this.selectedTask!.state).then(
        () => {
          this.selectedTask = null;
        }
      );
    }
  },
  created() {
    this.id = (this.$route.params.id as unknown) as number;
    this.getUser();
  }
});
</script>
<style>
#task-container {
  border: #ffcd29 1px solid;
  border-color: #ffcd29;
  border-radius: 10px;
}
</style>
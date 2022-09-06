<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card elevation="10" style="border-radius: 10px" class="pl-5 main-card">
          <v-row>
            <v-col cols="8">
              <div class="pa-10" style="text-align: center">
                <h1 class="blue-text">Sign in to Aswar hr dashboard</h1>
                <p class="pt-5 blue-text">Ensure your email for registration</p>
              </div>
              <v-row align="center" justify="center">
                <v-form ref="form " @submit.prevent="login">
                  <v-text-field
                    v-model="form.email"
                    :rules="emailValidation"
                    color="#232F49"
                    label="Email"
                    name="email"
                    type="email"
                    prepend-icon="mdi-email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.password"
                    :rules="emailValidation"
                    color="#232F49"
                    label="Password"
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    hint="At least 8 characters"
                    class="input-group--focused"
                    @click:append="showPassword = !showPassword"
                    prepend-icon="mdi-lock"
                    required
                  ></v-text-field>
                  <div class="text-center mt-3">
                    <v-btn
                      name="submit"
                      type="submit"
                      value="submit"
                      color="#232F49"
                      rounded
                      dark
                      class="mb-10"
                    >Login</v-btn>
                  </div>
                </v-form>
              </v-row>
            </v-col>
            <v-col
              cols="4"
              style="
                background-color: #151b29;
                margin: 0px;
                padding: 0px;
                border-radius: 10px;
              "
            >
              <v-container class="fill-height">
                <div style="text-align: center">
                  <v-img
                    src="../assets/Logo.svg"
                    max-width="150"
                    style="margin-left: 60px"
                    v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  ></v-img>
                  <p
                    class="pt-10 white--text"
                    v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  >Enter your personal details and start journey with us</p>
                </div>
              </v-container>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title>Error occurred!</v-card-title>
          <v-card-actions>
            <v-btn v-btn color="primary" text @click="dialog = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>
<script lang="ts">
import { AuthService, LoginDto } from "@/client";
import { Validation } from "@/types/Validation";
import { emailValidation, passwordValidation } from "@/utils/Validation";
import { TOKEN } from "@/utils/keys";
import Vue from "vue";
interface LoginData {
  dialog: boolean;

  showPassword: boolean;
  form: any;
  emailValidation: Validation;
  passwordValidation: Validation;
}
export default Vue.extend({
  data(): LoginData {
    const defaultForm: LoginDto = {
      password: "",
      email: ""
    };
    return {
      dialog: false,

      showPassword: false,
      form: defaultForm,
      emailValidation: emailValidation,
      passwordValidation: passwordValidation
    };
  },
  methods: {
    login(): void {
      AuthService.authControllerLogin({
        email: this.form.email,
        password: this.form.password
      })
        .then(value => {
          localStorage.setItem(TOKEN, value.token);
          this.$router.push("/");
        })
        .catch(() => {
          this.dialog = true;
        });
    }
  },
  components: {}
});
</script>
    <style>
.blue-text {
  color: #151b29;
}

.v-text-field {
  width: 450px;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 20px;
  }

  .v-text-field {
    width: 200px;
  }

  .main-card {
    margin: 10px;
  }
}
</style>
  

    
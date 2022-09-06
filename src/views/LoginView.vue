<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card
          elevation="10"
          style="border-radius: 10px"
          class="pl-5 main-card"
        >
          <v-row>
            <v-col cols="8">
              <div class="pa-10" style="text-align: center">
                <h1 class="blue-text">Sign in to Aswar hr dashboard</h1>
                <p class="pt-5 blue-text">Ensure your email for registration</p>
              </div>
              <v-row align="center" justify="center">
                <v-form ref="form">
                  <v-text-field
                    color="#232F49"
                    label="Email"
                    name="email"
                    type="email"
                    prepend-icon="mdi-email"
                    required
                  ></v-text-field>
                  <v-text-field
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
                  >
                  </v-text-field>
                  <div class="text-center mt-3">
                    <v-btn
                      name="submit"
                      type="submit"
                      value="submit"
                      color="#232F49"
                      rounded
                      dark
                      @click="login()"
                      class="mb-10"
                    >
                      Sign In
                    </v-btn>
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
                    src="../assets/logo.svg"
                    max-width="150"
                    style="margin-left: 60px"
                    v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  >
                  </v-img>
                  <p
                    class="pt-10 white--text"
                    v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
                  >
                    Enter your personal details and start journey with us
                  </p>
                </div>
              </v-container>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      showPassword: false,

      emailRules: [
        (v: string) => !!v || "E-mail is required",
        (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async login() {
      console.log("data");
    },
  },
  components: {},
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
  

    
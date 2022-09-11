import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import moment from "moment";

Vue.config.productionTip = false;
Vue.filter("formatDate", function (value: string) {
  if (value) {
    return moment(String(value)).format("YYYY/MM/DD");
  }
});
Vue.filter("formatAttendanceDate", function (value: string) {
  if (value) {
    return moment(String(value)).format("YYYY/MM/DD     HH:MM:SS");
  }
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

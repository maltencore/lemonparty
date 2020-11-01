import Vue from "vue";
import app from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import data from "./assets/data.js";
import methods from "./assets/scripts.js";

Vue.prototype.$toExponential = function (x) {
  if (x < 10000) return x;
  else return x.toExponential(2);
};

Vue.prototype.$structures = data.structures;
Vue.prototype.$achievements = data.achievements;
Vue.prototype.$settings = data.settings;
Vue.prototype.$methods = methods;

/*
  ACHIEVEMENT
  IMPOSTAZIONI PER DIMENSIONE TESTO E LINGUA
  IMMAGININE BELLINE
*/

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  render: (h) => h(app),
  vuetify: new Vuetify()
}).$mount("#app");

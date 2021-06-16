import Vuetify from "vuetify";
import CompositionApi from "@vue/composition-api";
import Vue from "vue";
import { createLocalVue } from "@vue/test-utils";

export function vueInit(): typeof Vue {
  Vue.use(Vuetify);
  Vue.use(CompositionApi);
  const localVue = createLocalVue();
  localVue.use(Vuetify);
  return localVue;
}

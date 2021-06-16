import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { vueInit } from "./utils";

describe("HelloWorld.vue", () => {
  it("renders uppercase props.msg when passed", () => {
    const msg = "new message";
    const localVue = vueInit();

    const wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: { msg },
    });
    expect(wrapper.find("[data-test=title]").text()).toMatch("NEW MESSAGE");
  });
});

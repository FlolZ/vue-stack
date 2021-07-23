<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  components: {
    HelloWorld,
  },
  props: {},
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
});
</script>

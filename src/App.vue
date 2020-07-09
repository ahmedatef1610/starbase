<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>

import Nav from "./components/nav/Nav.vue";

export default {
  data() {
    return {};
  },
  methods: {},

  components: {
    Nav
  }
};
</script>

<style lang="scss" >
body {
  background-color: #333;
}
</style>

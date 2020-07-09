<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary justify-content-center">
    <div class="navbar-nav flex-row">
      <router-link class="nav-item nav-link mx-3" active-class="active" exact to="/characters">Characters</router-link>
      <router-link class="nav-item nav-link mx-3" active-class="active" exact to="/planets">Planets</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" >
</style>

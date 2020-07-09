<template>
  <div>
    <h1 class="display-4 text-center my-5 text-light">{{title}}</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4" v-for="i in 3" :key="i">
          <Character :id="i"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Character from "./Character.vue";

export default {
  data() {
    return {
      title: "Generate Your Team"
    };
  },
  methods: {},
  components: { Character }
};
</script>

<style lang="scss" >

</style>

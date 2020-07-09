<template>
  <div class="card mb-3 text-center text-white bg-dark">
    <div class="card-body">
      <h5 class="card-title">{{character.name}}</h5>
      <p class="card-text">Height: {{character.height}} Cm</p>
      <p class="card-text">Mass: {{character.mass}} Kg</p>
      <p class="card-text">Hair Color: {{character.hair_color}}</p>
      <p class="card-text">Eye Color: {{character.eye_color}}</p>
      <p class="card-text">Gender: {{character.gender}}</p>

      <button class="btn btn-primary" @click="switchCharacter()">Switch Character</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      character: {}
    };
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.co/api/people/${id}`)
        .then(res => res.json())
        .then(data => {
          this.character = data;
        });
    },
    switchCharacter() {
      const randam_id = Math.floor(Math.random() * 83) + 1;
      this.fetchCharacter(randam_id);
    }
  },
  created() {
    this.fetchCharacter(this.id);
  }
};
</script>

 <style lang="scss" scoped>
</style>

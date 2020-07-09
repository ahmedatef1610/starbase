<template>
  <div class="card mb-3 text-center text-white bg-dark">
    <div class="card-body">
      <h5 class="card-title text-capitalize">{{planet.name}}</h5>
      <p class="card-text text-capitalize">orbital period: {{planet.orbital_period}}</p>
      <p class="card-text text-capitalize">rotation period: {{planet.rotation_period}}</p>
      <p class="card-text text-capitalize">diameter: {{planet.diameter}}</p>
      <p class="card-text text-capitalize">gravity: {{planet.gravity}}</p>
      <p class="card-text text-capitalize">climate: {{planet.climate}}</p>
      <p class="card-text text-capitalize">surface water: {{planet.surface_water}}</p>
      <p class="card-text text-capitalize">terrain: {{planet.terrain}}</p>
      <p class="card-text text-capitalize">population: {{planet.population}}</p>

      <button class="btn btn-primary" @click="switchPlanet()">Switch planet</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      planet: {}
    };
  },
  methods: {
    fetchPlanet(id) {
      fetch(`https://swapi.co/api/planets/${id}`)
        .then(res => res.json())
        .then(data => {
          this.planet = data;
        });
    },
    switchPlanet() {
      const randam_id = Math.floor(Math.random() * 80) + 1;
      this.fetchPlanet(randam_id);
    }
  },
  created() {
    this.fetchPlanet(this.id);
  }
};
</script>

 <style lang="scss" scoped>
</style>

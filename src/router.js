import Vue from 'vue';
import VueRouter from 'vue-router';

import Characters from './components/characters/Characters.vue';
import Planets from './components/planets/Planets.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/characters', component:Characters },
    { path: '/planets', component:Planets },

  ]

export default new VueRouter({mode: 'history', routes});
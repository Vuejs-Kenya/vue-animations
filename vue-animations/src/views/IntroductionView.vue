<template>
  <div class="container">
  <div class="header">
    <h1>Vue JS Animation Techniques</h1>
  </div>
  <div class="centerContent">
    <h1 class="backButton" @click="prevSlide">
      &lt;
    </h1>
    <div class="centerDiv">
      <div class="contentContainer">
        <component :is="slides[currentSlide]"></component>
      </div>
      
    </div>
    <h1 class="nextButton" @click="nextSlide">
      &gt;
    </h1>
  </div>
  <div class="footerNav">
    <ul class="nav">
      <li class="navItem">
        <router-link to="/">introduction</router-link>
      </li>
      <li class="navItem">
        <router-link to="/transitionComponent">transitionComponent</router-link>
      </li>
      <li>
        <router-link to="/transitionGroups">transitionGroups</router-link>
      </li>
      <li>
        <router-link to="/classBasedAnimations">classBasedAnimations</router-link>
      </li>
      <li>
        <router-link to="/stateDrivenAnimations">stateDrivenAnimations</router-link>
      </li>
    </ul>
  </div>
  </div>
</template>


<script setup>

import { ref } from 'vue';
import Slide1 from '../components/introduction/Slide1.vue';
import Slide2 from '../components/introduction/Slide2.vue';

const slides = {
  1: Slide1,
  2: Slide2
}

const currentSlide = ref(1);

const nextSlide = () => {
  if(currentSlide.value < Object.keys(slides).length){
    currentSlide.value++;
  }
}

const prevSlide = () => {
  if(currentSlide.value > 1){
    currentSlide.value--;
  }
}


</script>




<style scoped>
.container{
  background-image: url(../assets/images/bg2.png);
}
</style>

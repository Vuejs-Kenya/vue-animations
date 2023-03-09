<template>
      <div class="container">
  <div class="header">
    <h1>Vue JS Animation Techniques</h1>
  </div>
  <div class="centerContent">
    <h1 class="backButton">
      &lt;
    </h1>
    <div class="centerDiv">
      <div class="contentContainer">
      </div>
    </div>
    <h1 class="nextButton">
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
  
  <style scoped>
  .container{
  background-image: url(../assets/images/bg4.png);
}
  </style>
  
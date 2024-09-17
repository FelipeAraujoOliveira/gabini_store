<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import HeadphonesCart from './components/HeadphonesCart.vue';
import HeadphonesSample from './components/HeadphonesSample.vue';
import CountdownComponent from './components/CountdownComponent.vue';

// const fone1 = {
//   image:
// }


const product1 = {
  image: './assets/img/g433-gallery-black-1 1 (1).png',
  title: 'Gabini® K-29 Premium Headset',
  price: '94.99',
};

const product2 = {
  image: './assets/img/g433-gallery-black-1 1 (1).png',
  title: 'Gabini® K-29 Premium Headset',
  price: '94.99',
};




</script>

<template>
  <div id="app">
    <HeaderComponent />
    <HeroComponent />
    <HeadphonesSample />
    <HeadphonesCart  />
    <CountdownComponent />
  </div>
  <RouterView />
</template>

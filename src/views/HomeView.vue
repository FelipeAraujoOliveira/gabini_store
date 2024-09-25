<script setup>
import { onMounted } from 'vue';
import { TweenLite } from "gsap";
import { TweenMax } from "gsap";
import { Expo } from "gsap";

</script>

<template>
  <Header_component></Header_component>
  <Hero_component></Hero_component>
  <Card_component></Card_component>
  <Showcase_component></Showcase_component>
  <Timer_component></Timer_component>
  <CarouselComponent />
</template>

<script>
import Hero_component from '@/components/Hero_component.vue';
import Card_component from '@/components/Card_component.vue';
import Showcase_component from '@/components/Showcase_component.vue';
import Timer_component from '@/components/Timer_component.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';

export default {
  name: 'HomeView',
  components: {
    Hero_component,
    Card_component,
    Showcase_component,
    Timer_component,
    CarouselComponent
  },
  data() {
    return {

    }
  }
}
</script>


<style></style>

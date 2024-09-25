<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">

  <Header_component></Header_component>

  </div>
  <RouterView />
</template>

<script>
import Header_component from '@/components/Header_component.vue';

export default {
  name: 'App',
  components: {
    Header_component,
  },
  data() {
    return {

    }
  }
}

</script>
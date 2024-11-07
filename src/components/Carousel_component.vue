<template>
  <div class="container-box">
    <section class="testimonial-section">
      <div class="title-box">
        <div class="title">
          <h3>TESTIMONIALS</h3>
        </div>
        <div class="description">
          <p>Voices of Satisfaction: Discover What Our Clients Have to Say</p>
        </div>
      </div>

      <div class="carousel-container">
        <carousel :items-to-show="3" :items-to-scroll="1" transition="300">
          <slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="card">
              <div class="stars">
                <StarComponent />
              </div>
              <p>{{ testimonial.text }}</p>
              <div class="author">
                <img :src="testimonial.img" alt="avatar" class="avatar" />
                <h4>{{ testimonial.author }}</h4>
                <p class="position">{{ testimonial.position }}</p>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </section>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import StarComponent from './Star_component.vue';
import axios from 'axios';

export default {
  name: 'Carousel_component',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    StarComponent
  },
  data() {
    return {
      testimonials: [] // Inicia vazio
    };
  },
  mounted() {
    this.fetchTestimonials();
  },
  methods: {
    async fetchTestimonials() {
      try {
        const response = await axios.get(''); // URL
        this.testimonials = response.data;
      } catch (error) {
        console.error('Erro ao buscar depoimentos:', error);
      }
    }
  }
};
</script>


<style scoped>
.testimonial-section {
  width: 80%;
  padding: 40px 0;
  background-color: #f8f9fa;
}

.title-box {
  text-align: center;
  margin-bottom: 30px;
}

.title-box h3 {
  font-size: 2rem;
  color: #333;
}

.title-box p {
  color: #888;
  margin-top: 10px;
  font-size: 1rem;
}

.carousel-container {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 400px; 
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stars {
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  flex-grow: 1; 
}

.author {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.author .avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.author h4 {
  font-size: 1.1rem;
  color: #333;
}

.author .position {
  font-size: 0.9rem;
  color: #999;
}
</style>

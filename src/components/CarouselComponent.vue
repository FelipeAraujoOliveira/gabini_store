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
                    <img :src="testimonial.img" alt="avatar" class="avatar">
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
import StarComponent from './StarComponent.vue';

export default {
  name: 'CarouselComponent',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    StarComponent
  },
  data() {
    return {
      testimonials: [
        {
          text: "I absolutely love this coffee maker! I use it every morning. Cold coffee is my favorite and this little machine makes great cold coffee. It is strong and tasty. I regular coffee cup or a larger stainless steel cup will work. ",
          author: "Marlina Jole",
          position: "CEO, Cofin",
          img: "https://s3-alpha-sig.figma.com/img/e1a5/069b/a506376dde2ce401dc604140d0e0698a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAFnmr6elq8xkyioM~RX9HZ4n7qJS7ddHAoV80w7va1sxyQpgYPrGc7Wp6VPRiQkA0O0JauC0QICPof2HTfvv9J96IW11FW2662fBaewP4ac5Sxr8adN3Aaesd9eJ7YIYtmt1rhkneZCYYL0Gb42JB0dXOIpypLdhrH71YMOdaa~W--6YHCbNbHmY2CW7lw1VL-k20QhfhtHcrYgfGqNTvHHkAFysbqyDxN5z2FcNGR15DdgvV~tTF2huNA53Iw6jg9sfWIa8Zdoyrk7-XxDZcSElcZvC0F9fKtgIRhYhcrQkmVTWSU~d7FTruzhyEQO7h8oDEAyWO0oMw9gi5GIsA__",
        },
        {
          text: "I love the slim design of this Keurig. It works well except for the cold coffee. It states it does both hot and cold but I haven't found that to be accurate. The hot is perfect but it doesn't produce the cold coffee.",
          author: "Jhonatan Albert",
          position: "CEO, Samsang",
          img: "https://s3-alpha-sig.figma.com/img/6b00/a3e1/7e133a9c9763a03a9f3a1c1c7a0fe58f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkXsT-HioRfTE~-vA8eMK44yNrofd7OUFFZRRfeYnjYzBI8481ramkKVCvKRCRTZPH0Lr5pEMdNjF35iEXpybAVI1b77uk3w6YJyJs52ACizcQFQ~GVygoOEXz3aTca0EbCRey8gselsInXjIB1lD9OC4hE3roalr~Z5N-y26QY-Wp~fcU1B5fcIOcjeyEFWZ~xyDLrM-8pZVHsdHbSpBzagAPQYvu8DSEV5GLL0qgWvvaEi07lR~rCC04o4bZ9UVaeM1mnUutxGyzgH5s4QVRm2R9Iq2W~nej3eAJAjTcupBRVC3pSTCDVCYwHJkVbjK2xF5x8zY8nXK-PNX6ZMhQ__",
        },
        {
          text: "Nothing wrong with the maker but seller had it 'On sale' truns out their supposed sale price was actually what the product actually sells for normally. It's retail price is 119.99. And is currently on sale for 64.99 ",
          author: "Stevano Albert",
          position: "CEO, Mayura",
          img: "https://s3-alpha-sig.figma.com/img/3881/5141/15ecef122f29bbd1948f23b2a07069f4?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSLcfeH6AplBB7VGvrfhghj5SHMDTYulSPczlzwc9lyZThcIBHwgv88PAvv8F~NNmLEQTQJ9DAerODr8vxKF9-gtQCtzyF8r8iFg07dZA4LiLmPR0KkcadaWRrrQmQqCRqvd9NM4-~sBbe09rMWhcCof~bES1bJvNQ7YnY9bzd3ia3Gg-SbiUpNpTFMQnvFkhWvZkSkS8bFxt9ZLlEKEu7NriDPGSFJkv7jCXRQ3a9MipvfNdfP0awyEHh3xx7uleXyylMr3szCzfV8bif1qTuBRHiRq-bbPoUFJidQq-uadfqYWAWHBV5ratECI8zfVuK3urcl2dRC4FLF9YqWyzA__",
         }
        ,{
          text: "Nothing wrong with the maker but seller had it 'On sale' truns out their supposed sale price was actually what the product actually sells for normally. It's retail price is 119.99. And is currently on sale for 64.99 ",
          author: "Stevano Albert",
          position: "CEO, Mayura",
          img: "https://s3-alpha-sig.figma.com/img/3881/5141/15ecef122f29bbd1948f23b2a07069f4?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSLcfeH6AplBB7VGvrfhghj5SHMDTYulSPczlzwc9lyZThcIBHwgv88PAvv8F~NNmLEQTQJ9DAerODr8vxKF9-gtQCtzyF8r8iFg07dZA4LiLmPR0KkcadaWRrrQmQqCRqvd9NM4-~sBbe09rMWhcCof~bES1bJvNQ7YnY9bzd3ia3Gg-SbiUpNpTFMQnvFkhWvZkSkS8bFxt9ZLlEKEu7NriDPGSFJkv7jCXRQ3a9MipvfNdfP0awyEHh3xx7uleXyylMr3szCzfV8bif1qTuBRHiRq-bbPoUFJidQq-uadfqYWAWHBV5ratECI8zfVuK3urcl2dRC4FLF9YqWyzA__",
         },
         {
          text: "Nothing wrong with the maker but seller had it 'On sale' truns out their supposed sale price was actually what the product actually sells for normally. It's retail price is 119.99. And is currently on sale for 64.99 ",
          author: "Stevano Albert",
          position: "CEO, Mayura",
          img: "https://s3-alpha-sig.figma.com/img/3881/5141/15ecef122f29bbd1948f23b2a07069f4?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSLcfeH6AplBB7VGvrfhghj5SHMDTYulSPczlzwc9lyZThcIBHwgv88PAvv8F~NNmLEQTQJ9DAerODr8vxKF9-gtQCtzyF8r8iFg07dZA4LiLmPR0KkcadaWRrrQmQqCRqvd9NM4-~sBbe09rMWhcCof~bES1bJvNQ7YnY9bzd3ia3Gg-SbiUpNpTFMQnvFkhWvZkSkS8bFxt9ZLlEKEu7NriDPGSFJkv7jCXRQ3a9MipvfNdfP0awyEHh3xx7uleXyylMr3szCzfV8bif1qTuBRHiRq-bbPoUFJidQq-uadfqYWAWHBV5ratECI8zfVuK3urcl2dRC4FLF9YqWyzA__",
         }
      ]
    };
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
  width: 300px; /* Definindo uma largura fixa para os cards */
  height: 400px; /* Definindo uma altura fixa para todos os cards */
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
  flex-grow: 1; /* Isso permite que o texto ocupe o espaço disponível */
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

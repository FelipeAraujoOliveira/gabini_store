<template>


    <Header></Header>
    <Hero></Hero>
    <Products></Products>
    <ProductCard></ProductCard>
    <Timer></Timer>
    <ProductCarroussel></ProductCarroussel>
    <TestimonialCard></TestimonialCard>
    <Footer></Footer>



</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import TestimonialCard from '../components/TestimonialCard.vue';
import Timer from '../components/Timer.vue';
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';
import ProductCarroussel from '../components/ProductCarroussel.vue';
import Products from '../components/Products.vue';


export default {
    components: {
        ProductCard,
        TestimonialCard,
        Timer,
        Header,
        Hero,
        Footer,
        ProductCarroussel,
        Products
    },
    data(){
        return{
            
        }
    }
}







</script>
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
import ProductCard from '@components/products/ProductCard.vue';
import TestimonialCard from '@components/shared/TestimonialCard.vue';
import Timer from '@components/shared/Timer.vue';
import Header from '@components/layout/Header.vue';
import Hero from '@components/home/Hero.vue';
import Footer from '@components/layout/Footer.vue';
import ProductCarroussel from '@components/products/ProductCarroussel.vue';
import Products from '@components/home/Products.vue';


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
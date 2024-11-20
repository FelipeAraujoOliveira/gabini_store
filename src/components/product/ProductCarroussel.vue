<template>
    <div class="container">
        <div class="products">
            <div class="product">
                <div class="image-container">
                    <img :src="productImageSrc" alt="" id="product-image" class="product-image">
                </div>
                <div class="p-text-box">
                    <h1>JBL Children's <br> Bluetooth <br> Headphones</h1>
                    <div class="stars">
                        <img :src="frame18Src" alt=""><br>
                        <div class="color">Color Options
                            <div class="circle1 color-option" :data-image="product02Src" data-verify="true">
                            </div>
                            <div class="circle2 color-option" :data-image="product01Src" data-verify="false">
                                <img :src="verifyIconSrc" alt="" id="verify-icon">
                            </div>
                        </div>
                        <br>
                        <img class="frame" :src="frame21Src" alt=""><br><br>
                        <button class="btn_hero">See More Details
                            <div class="btn-ball"><img :src="setaSrc" alt=""></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import product01 from '@/assets/img/product01.svg';
import product02 from '@/assets/img/product02.svg';
import frame18 from '@/assets/img/Frame 18.svg';
import frame21 from '@/assets/img/Frame 21.svg';
import verifyIcon from '@/assets/img/verify.svg';
import seta from '@/assets/img/seta.svg';

export default {
    data() {
        return {
            productImageSrc: product01,
            product02Src: product02,
            product01Src: product01,
            frame18Src: frame18,
            frame21Src: frame21,
            verifyIconSrc: verifyIcon,
            setaSrc: seta
        };
    },
    mounted() {
        // Seleciona os elementos das cores e a imagem do produto
        const colorOptions = this.$el.querySelectorAll(".color-option");
        const productImage = this.$el.querySelector("#product-image");
        const verifyIcon = this.$el.querySelector("#verify-icon");

        console.log("colorOptions:", colorOptions);
        console.log("productImage:", productImage);
        console.log("verifyIcon:", verifyIcon);

        // Função para animar a troca de imagem
        const animateProductChange = (newSrc) => {
            console.log("Changing image to:", newSrc);
            console.log("Current image src before change:", productImage.src);
            productImage.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            productImage.style.opacity = "0";
            productImage.style.transform = "translateY(-20px)";

            setTimeout(() => {
                productImage.src = newSrc;
                productImage.onload = () => {
                    console.log("Image loaded successfully:", newSrc);
                    productImage.style.opacity = "1";
                    productImage.style.transform = "translateY(0)";
                };
                productImage.onerror = () => {
                    console.error("Failed to load image:", newSrc);
                    productImage.style.opacity = "1";
                    productImage.style.transform = "translateY(0)";
                };
                console.log("Current image src after change:", productImage.src);
            }, 600); // Aguarda a transição para trocar a imagem
        };

        // Função para alternar o ícone de verificação
        const toggleVerify = (selectedCircle) => {
            colorOptions.forEach((circle) => {
                if (circle === selectedCircle) {
                    verifyIcon.style.opacity = "1";
                    verifyIcon.style.transition = "opacity 0.4s ease";
                    selectedCircle.appendChild(verifyIcon); // Adiciona o ícone ao círculo selecionado
                } else {
                    circle.contains(verifyIcon) && circle.removeChild(verifyIcon); // Remove o ícone do círculo não selecionado
                }
            });
        };

        // Adiciona eventos de clique em cada círculo para trocar a imagem e verificação
        colorOptions.forEach((circle) => {
            circle.addEventListener("click", () => {
                const newImageSrc = circle.getAttribute("data-image");
                console.log("Clicked circle with newImageSrc:", newImageSrc);
                if (newImageSrc) {
                    animateProductChange(newImageSrc);
                    toggleVerify(circle); // Exibe o ícone de verificação no círculo selecionado
                } else {
                    console.error("data-image attribute not found on clicked circle.");
                }
            });
        });
    }
}
</script>
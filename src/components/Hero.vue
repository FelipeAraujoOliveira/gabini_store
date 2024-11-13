<template>
    <div class="hero">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="text-box">
                <h1>Gabini <br>Headset <br> Store</h1>
                <div class="info">
                    <h2>Welcome to Gabini quality, at <br> our most welcoming price.</h2>
                    <button class="btn_hero">See More Details <div class="btn-ball"><img src="https://enricosotelo.github.io/img/seta.svg" alt=""></div></button>
                </div>
                <div class="ratings">
                    <div class="stars"><div class="stars-box"><h3>4.8</h3><img src="https://enricosotelo.github.io/img/Frame%201321314570.svg" alt=""></div><p>2,290 ratings</p></div>
                    <div class="ten-k"><h2>10k+</h2><p>Bought in past month</p></div>
                </div>
            </div>
            <div class="card-head"> <img class="phone" src="https://enricosotelo.github.io/img/image%20166%201.svg" alt="">
            <div class="ch-desc"> <div class="ch-circle"><img src="https://enricosotelo.github.io/img/Vector.svg" alt=""></div><div class="ch-text"><p>Warranty</p><b>2 years</b></div></div>
            <div class="ch-desc1"> <div class="ch-circle"><img src="https://enricosotelo.github.io/img/Vector1.svg" alt=""></div><div class="ch-text"><p>Battery</p><b>78 Hours</b></div></div>
            </div>
        </div>
        <div class="hl-box">
            <div class="line1">
                <div class="line-box"><span>Your text here</span> <img src="../assets/img/Vector.png" alt="" class="vector"></div>
            </div>
            <div class="line2">
                <div class="line-box1"><span>Your text here</span> <img src="../assets/img/Vector.png" alt="" class="vector"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    const line1 = this.$el.querySelector('.line1');
    const line2 = this.$el.querySelector('.line2');

    
    const originalContentLine1 = line1.innerHTML;
    const originalContentLine2 = line2.innerHTML;

   
    const numberOfCopies = 100; 

    for (let i = 0; i < numberOfCopies; i++) {
      line1.innerHTML += originalContentLine1; 
      line2.innerHTML += originalContentLine2; 
    }
  }
}
</script>


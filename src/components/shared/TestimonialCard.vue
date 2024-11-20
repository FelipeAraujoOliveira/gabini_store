<template>
    <div class="container">
            <div class="products">
                <div>
                    <h1>TESTIMONIALS</h1>
                    <p>Voices of Satisfaction: Discover What Our Clients Have to Say</p>
                </div>
        
                <div class="r-card-box">
                    <div class="r-card" id="card1">
                        <img src="https://enricosotelo.github.io/img/Frame%2017.svg" alt="">
                        <p>I absolutely love this coffee maker! I use it every morning. Cold coffee is my favorite and this little machine makes great cold coffee. It is strong and tasty. I regular coffee cup or a larger stainless steel cup will work. </p>
                        <img src="https://enricosotelo.github.io/img/perfil1.svg" alt="">
                    </div>
                    <div class="r-card" id="card2">
                        <img src="https://enricosotelo.github.io/img/Frame%2017.svg" alt="">
                        <p>I love the slim design of this Keurig. It works well except for the cold coffee. It states it does both hot and cold but I haven't found that to be accurate. The hot is perfect but it doesn't produce the cold coffee.</p>
                        <img src="https://enricosotelo.github.io/img/perfil2.svg" alt="">
                    </div>
                    <div class="r-card" id="card3">
                        <img src="https://enricosotelo.github.io/img/Frame%2017.svg" alt="">
                        <p>Nothing wrong with the maker but seller had it "On sale"truns out their supposed sale price was actually what the product actually sells for normally. It's retail price is 119.99. And is currently on sale for 64.99 </p>
                        <img src="https://enricosotelo.github.io/img/perfil3.svg" alt="">
                    </div>
                    <div class="r-card" id="card4">
                        <img src="https://enricosotelo.github.io/img/Frame%2017.svg" alt="">
                        <p>I absolutely love this coffee maker! I use it every morning. Cold coffee is my favorite and this little machine makes great cold coffee. It is strong and tasty. I regular coffee cup or a larger stainless steel cup will work. </p>
                        <img src="https://enricosotelo.github.io/img/perfil4.svg" alt="">
                    </div>
                    <div class="r-card" id="card5">
                        <img src="https://enricosotelo.github.io/img/Frame%2017.svg" alt="">
                        <p>I love the slim design of this Keurig. It works well except for the cold coffee. It states it does both hot and cold but I haven't found that to be accurate. The hot is perfect but it doesn't produce the cold coffee.</p>
                        <img src="https://enricosotelo.github.io/img/perfil5.svg" alt="">
                    </div>
                    <div class="r-card" id="card6">
                        <img src="https://enricosotelo.github.io/img/Frame%2017.svg" alt="">
                        <p>Nothing wrong with the maker but seller had it "On sale"truns out their supposed sale price was actually what the product actually sells for normally. It's retail price is 119.99. And is currently on sale for 64.99 </p>
                        <img src="https://enricosotelo.github.io/img/perfil6.svg" alt="">
                    </div>
                </div>
        
                <div class="btn-box">
                    <button class="prox">
                        <img src="https://enricosotelo.github.io/img/Icon-prox.svg" alt="">
                    </button>
                    <button class="nex">
                        <img src="https://enricosotelo.github.io/img/Icon-prox.svg" alt="">
                    </button>
                </div>
            </div>
        </div>

</template>

<script>
export default {
  mounted() {
    const cardBox = this.$el.querySelector(".r-card-box");
    const prevButton = this.$el.querySelector(".prox");
    const nextButton = this.$el.querySelector(".nex");
    const cards = this.$el.querySelectorAll(".r-card");
    let currentPage = 0; 

    
    function updateCarousel() {
      
      cardBox.style.transition = "transform 0.5s ease-in-out";
      
      
      const offset = -currentPage * 100; // Shift position left or right
      cardBox.style.transform = `translateX(${offset}%)`;
      
      
      prevButton.style.background = currentPage === 0 ? "transparent" : "#000";
      nextButton.style.background = currentPage === 1 ? "transparent" : "#000";
    }

    
    prevButton.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--; 
        updateCarousel();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentPage < 1) {
        currentPage++; 
        updateCarousel();
      }
    });

    
    updateCarousel();
  }
}

</script>


<template>
  <section class="container-box">
    <div class="line1">
      <div class="line-text">
        <p>your text here</p>&#10022;
      </div>
    </div>
    <div class="line2">
      <div class="line-text">
        <p>your text here</p>&#10022;
      </div>
    </div>
    <div class="container">
      <div class="text-box">
        <h1>Gabini headset store</h1>
        <div class="subtitle">
          <h2>Welcome to Gabini quality, at our most welcoming price.</h2>
          <div class="see-more">
            <a href="">see-more details</a>
            <div class="ball"><i class="bi bi-arrow-right"></i></div>
          </div>
        </div>
        <div class="rating">
          <div class="rating-box">
            <div class="stars-box">
              <div class="stars">
                <h3><b>4.8</b></h3>
                <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                    class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></p><br>
              </div>
              <span>2.290 ratings</span>
            </div>
            <div class="stars-box">
              <div class="stars">
                <h2>10K+</h2>
              </div>
              <span><b>Bought in post month</b></span>
            </div>
          </div>
        </div>
      </div>
      <div class="headphone">
        <div class="card">
          <img src="https://i.ibb.co/qspqCHK/image-166-1.png" alt="Fone gamer">
          <div class="desc1">
            <div class="desc-box">
              <div class="descball">
                <i class="bi bi-battery"></i>
              </div>
              <div class="info">
                <span>Battery</span>
                <p><b>78 Hours</b></p>
              </div>
            </div>
          </div>
          <div class="desc2">
            <div class="desc-box">
              <div class="descball">
                <i class="fa-solid fa-medal"></i>
              </div>
              <div class="info">
                <span>Warranty</span>
                <p><b>2 years</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const numberOfDivs = 40;

    const line1 = document.querySelector('.line1');
    if (line1) {
      for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement('div');
        div.className = 'line-text';

        const p = document.createElement('p');
        p.textContent = 'your text here';

        const star = document.createTextNode('✦');

        div.appendChild(p);
        div.appendChild(star);

        line1.appendChild(div);
      }
    }
    const line2 = document.querySelector('.line2');
    if (line2) {
      for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement('div');
        div.className = 'line-text2';
        const p = document.createElement('p');
        p.textContent = 'your text here';
        const star = document.createTextNode('✦');
        div.appendChild(p);
        div.appendChild(star);
        line2.appendChild(div);
      }
    }
  }
}
</script>

<style>
.line1 {
  position: absolute;
  width: 110%;
  height: 2.6vw;
  /* 50px */
  background-color: black;
  transform: rotate(25deg);
  top: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 200;
  right: -400px;
  font-size: 0.73vw;
  /* 14px */
  color: white;
  z-index: -1;
}

.line-text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 200;
  animation: moveLeftRight 40s ease-in-out infinite;
  white-space: nowrap;

  & p {
    margin: 0px 30px 0px 30px;
  }
}

@keyframes moveLeftRight {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-100vw);
  }

  75% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(0);
  }
}

.line-text2 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 200;
  animation: moveRightLeft 40s ease-in-out infinite;
  white-space: nowrap;

  & p {
    margin: 0px 30px 0px 30px;
  }
}


@keyframes moveRightLeft {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(100vw);
  }

  75% {
    transform: translateX(-100vw);
  }

  100% {
    transform: translateX(0);
  }
}


.line2 {
  position: absolute;
  width: 50%;
  height: 2.6vw;
  /* 50px */
  background-color: #000000;
  transform: rotate(-28deg);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 200;
  right: -500px;
  bottom: 395px;
  font-size: 0.73vw;
  /* 14px */
  color: white;
}

.text-box {
  width: 50%;
  height: 100%;
  gap: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & h1 {
    max-width: 26.04vw;
    /* 500px */
    font-size: 4.43vw;
    /* 85px */
    text-transform: uppercase;
    font-weight: 900;
    line-height: 1;
  }
}

.subtitle {
  padding-left: 20px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  border-left: 1px solid #000;

  & h2 {
    font-size: 1.66vw;
    /* 32px */
    max-width: 23.43vw;
    /* 450px */
  }
}

.see-more {
  padding-left: 20px;
  padding-right: 5px;
  width: 11.46vw;
  /* 220px */
  height: 2.6vw;
  /* 50px */
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-radius: 30px;
  border: 1px solid black;
  position: relative;

  & a {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
  }

  .ball {
    width: 2.08vw;
    /* 40px */
    height: 2.08vw;
    /* 40px */
    border-radius: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: #000;
    color: #fff;
  }
}

.rating-box {
  display: flex;
  gap: 50px;
  align-items: center;
}

.stars-box {
  display: flex;
  flex-direction: column;
  gap: 10px;

  & span {
    font-weight: 200;
  }
}

.stars {
  display: flex;
  gap: 5px;

  & i {
    color: #FF8A00;
    margin-left: 5px;
  }
}


.desc1 {
  justify-content: center;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 100;
  width: 12.5vw;
  /* 240px */
  height: 4.06vw;
  /* 78px */
  background-color: #ffffff;
  border-radius: 80px;
  bottom: 45px;
  left: 15px;
}

.headphone {
  width: 50%;
  height: 100%;
  display: block;
  position: relative;

  & .card {
    position: absolute;
    width: 25.15vw;
    /* 483px */
    height: 27.55vw;
    /* 529px */
    background-image: url("https://i.ibb.co/jgXk5By/Rectangle.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 30px;
    right: 40px;
    bottom: 30px;

    & img {
      width: 26.35vw;
      /* 506px */
      height: 29.27vw;
      /* 562px */
      position: absolute;
      bottom: 0;
      right: -50px;
    }
  }
}

.desc2 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 100;
  width: 12.5vw;
  /* 240px */
  height: 4.06vw;
  /* 78px */
  background-color: #ffffff;
  border-radius: 80px;
  top: 100px;
  right: -40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
}

.desc-box {
  align-items: center;
  display: flex;
  width: 90%;
  height: 90%;
}

.descball {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  justify-content: center;
  display: flex;
  font-size: 24px;
  align-items: center;
  background-color: #000;
  color: #fff;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;

  & span {
    color: #000000c4;
  }
}
</style>
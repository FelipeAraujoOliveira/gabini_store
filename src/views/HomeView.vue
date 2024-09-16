<script setup>
import { onMounted } from 'vue';
import { TweenLite } from "gsap";
import { TweenMax } from "gsap";
import { Expo } from "gsap";


onMounted(() => {
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

  // Timer
  TweenLite.defaultEase = Expo.easeOut;

  initTimer("00:11"); // Initial timer value

  const reloadBtn = document.querySelector('.reload');
  const timerEl = document.querySelector('.timer');

  function initTimer(t) {
    const timerEl = document.querySelector('.timer');
    const minutesGroupEl = timerEl.querySelector('.minutes-group');
    const secondsGroupEl = timerEl.querySelector('.seconds-group');

    const minutesGroup = {
      firstNum: minutesGroupEl.querySelector('.first'),
      secondNum: minutesGroupEl.querySelector('.second')
    };

    const secondsGroup = {
      firstNum: secondsGroupEl.querySelector('.first'),
      secondNum: secondsGroupEl.querySelector('.second')
    };

    let time = {
      min: t.split(':')[0],
      sec: t.split(':')[1]
    };

    function updateTimer() {
      const date = new Date();
      date.setHours(0);
      date.setMinutes(time.min);
      date.setSeconds(time.sec);

      const newDate = new Date(date.valueOf() - 1000);
      const temp = newDate.toTimeString().split(" ");
      const tempsplit = temp[0].split(':');

      time.min = tempsplit[1];
      time.sec = tempsplit[2];

      const timestr = time.min + time.sec;
      const timeNumbers = timestr.split('');

      updateTimerDisplay(timeNumbers);

      if (timestr === '0000') {
        countdownFinished();
      } else {
        setTimeout(updateTimer, 1000);
      }
    }

    function updateTimerDisplay(arr) {
      animateNum(minutesGroup.firstNum, arr[0]);
      animateNum(minutesGroup.secondNum, arr[1]);
      animateNum(secondsGroup.firstNum, arr[2]);
      animateNum(secondsGroup.secondNum, arr[3]);
    }

    function animateNum(group, arrayValue) {
      TweenMax.killTweensOf(group.querySelector('.number-grp-wrp'));
      TweenMax.to(group.querySelector('.number-grp-wrp'), 1, {
        y: -group.querySelector('.num-' + arrayValue).offsetTop
      });
    }

    setTimeout(updateTimer, 1000);
  }

  function countdownFinished() {
    setTimeout(function () {
      TweenMax.set(reloadBtn, { scale: 0.8, display: 'block' });
      TweenMax.to(timerEl, 1, { opacity: 0.2 });
      TweenMax.to(reloadBtn, 0.5, { scale: 1, opacity: 1 });
    }, 1000);
  }

  reloadBtn.addEventListener('click', function () {
    TweenMax.to(this, 0.5, { opacity: 0, onComplete: function () {
      reloadBtn.style.display = "none";
    } });
    TweenMax.to(timerEl, 1, { opacity: 1 });
    initTimer("12:35");
  });
});
</script>

<template>
  <main>

    <TheHeader></TheHeader>

    <!-- <header>
      <nav class="header-navbar">
        <div class="logo"> <img src="../assets/img/image-Photoroom.png" alt=""></div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Sale</a></li>
          <li><a href="">Bundle & Save</a></li>
          <li class="dropdown">
            <a href="">Shop by Category</a>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                <a href="" class="dropdown-link">Item-1</a>
                <ul class="dropdown-submenu">
                  <li><a href="" class="dropdown-link">Item-5</a></li>
                  <li><a href="" class="dropdown-link">Item-6</a></li>
                </ul>
              </li>
              <li><a href="" class="dropdown-link">Item-2</a></li>
              <li><a href="" class="dropdown-link">Item-3</a></li>
              <li><a href="" class="dropdown-link">Item-4</a></li>
              <br>
            </ul>
          </li>
          <li><a href="">Support</a></li>
        </ul>
        <div class="login-box">
          <a href=""><b>sing in</b></a>
          <div class="line"></div>
          <a class="sing-up" href="">sing up for free</a>
        </div>
      </nav>
    </header> -->



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
            <img src="../assets/img/image 166 1.png" alt="">
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
    <section class="container-box">
      <div class="container">
        <div class="hp-card">
          <div class="atribute">
            <div class="atribute-box">
              <div class="atribute-ball">
                <i class="bi bi-box"></i>
              </div>
              <div class="atribute-info">
                <span>Item wheight</span>
                <p><b>2.6 Pounds</b></p>
              </div>
            </div>
          </div>
          <h1>Find the <br> perfect gifts</h1>
        </div>
        <div class="hp-card2">
          <div class="atribute">
            <div class="atribute-box">
              <div class="atribute-ball">
                <i class="bi bi-box"></i>
              </div>
              <div class="atribute-info">
                <span>Item wheight</span>
                <p><b>2.6 Pounds</b></p>
              </div>
            </div>
          </div>
          <h1>Find the <br> perfect gifts</h1>
        </div>
      </div>
    </section>
    <section class="container-box2">
      <div class="container">
        <div class="phones-box">
          <h1>new products</h1>
          <p>Choose the headset that best suits your needs. We offer top-quality options with <br> a variety of features
            to enhance your audio experience</p>
          <div class="card-box">
            <div class="card">
              <div class="phone-efect">
                <img class="phone3" src="../assets/img/g433-gallery-black-1 1 (1).png" alt="">
                <img src="../assets/img/g433-gallery-black-1 1.png" alt="" class="phone4">
              </div>
              <p>Gabini® K-29 Premium Headset <br> with Multi-Device Connectivity <br> and Noise-Canceling <br>
                Technology, Black</p>
              <div class="prices">
                <p>$</p>
                <h1>94.99</h1>
                <span>$130.00</span>
              </div>
              <div class="cart-btn">
                <a href="">add to cart</a>
                <div class="cart-icon-box">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="phone-efect">
                <img class="phone3" src="../assets/img/g433-gallery-black-1 1 (1).png" alt="">
                <img src="../assets/img/g433-gallery-black-1 1.png" alt="" class="phone4">
              </div>
              <p>Gabini® K-29 Premium Headset <br> with Multi-Device Connectivity <br> and Noise-Canceling <br>
                Technology, Black</p>
              <div class="prices">
                <p>$</p>
                <h1>94.99</h1>
                <span>$130.00</span>
              </div>
              <div class="cart-btn">
                <a href="">add to cart</a>
                <div class="cart-icon-box">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="phone-efect">
                <img class="phone3" src="../assets/img/g433-gallery-black-1 1 (1).png" alt="">
                <img src="../assets/img/g433-gallery-black-1 1.png" alt="" class="phone4">
              </div>
              <p>Gabini® K-29 Premium Headset <br> with Multi-Device Connectivity <br> and Noise-Canceling <br>
                Technology, Black</p>
              <div class="prices">
                <p>$</p>
                <h1>94.99</h1>
                <span>$130.00</span>
              </div>
              <div class="cart-btn">
                <a href="">add to cart</a>
                <div class="cart-icon-box">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-box">
      <div class="container">
        <div class="phone-box">
          <div class="banner-text-box">
            <h1>Save 20% or more on Headset</h1>
            <p>Enjoy for a limited time</p>

            <div class="timer">
              <div class="timer--clock">
                <div class="minutes-group clock-display-grp">
                  <div class="first number-grp">
                    <div class="number-grp-wrp">
                      <div class="num num-0">
                        <p>0</p>
                      </div>
                      <div class="num num-1">
                        <p>1</p>
                      </div>
                      <div class="num num-2">
                        <p>2</p>
                      </div>
                      <div class="num num-3">
                        <p>3</p>
                      </div>
                      <div class="num num-4">
                        <p>4</p>
                      </div>
                      <div class="num num-5">
                        <p>5</p>
                      </div>
                      <div class="num num-6">
                        <p>6</p>
                      </div>
                      <div class="num num-7">
                        <p>7</p>
                      </div>
                      <div class="num num-8">
                        <p>8</p>
                      </div>
                      <div class="num num-9">
                        <p>9</p>
                      </div>
                    </div>
                  </div>
                  <div class="second number-grp">
                    <div class="number-grp-wrp">
                      <div class="num num-0">
                        <p>0</p>
                      </div>
                      <div class="num num-1">
                        <p>1</p>
                      </div>
                      <div class="num num-2">
                        <p>2</p>
                      </div>
                      <div class="num num-3">
                        <p>3</p>
                      </div>
                      <div class="num num-4">
                        <p>4</p>
                      </div>
                      <div class="num num-5">
                        <p>5</p>
                      </div>
                      <div class="num num-6">
                        <p>6</p>
                      </div>
                      <div class="num num-7">
                        <p>7</p>
                      </div>
                      <div class="num num-8">
                        <p>8</p>
                      </div>
                      <div class="num num-9">
                        <p>9</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clock-separator">
                  <p>:</p>
                </div>
                <div class="seconds-group clock-display-grp">
                  <div class="first number-grp">
                    <div class="number-grp-wrp">
                      <div class="num num-0">
                        <p>0</p>
                      </div>
                      <div class="num num-1">
                        <p>1</p>
                      </div>
                      <div class="num num-2">
                        <p>2</p>
                      </div>
                      <div class="num num-3">
                        <p>3</p>
                      </div>
                      <div class="num num-4">
                        <p>4</p>
                      </div>
                      <div class="num num-5">
                        <p>5</p>
                      </div>
                      <div class="num num-6">
                        <p>6</p>
                      </div>
                      <div class="num num-7">
                        <p>7</p>
                      </div>
                      <div class="num num-8">
                        <p>8</p>
                      </div>
                      <div class="num num-9">
                        <p>9</p>
                      </div>
                    </div>
                  </div>
                  <div class="second number-grp">
                    <div class="number-grp-wrp">
                      <div class="num num-0">
                        <p>0</p>
                      </div>
                      <div class="num num-1">
                        <p>1</p>
                      </div>
                      <div class="num num-2">
                        <p>2</p>
                      </div>
                      <div class="num num-3">
                        <p>3</p>
                      </div>
                      <div class="num num-4">
                        <p>4</p>
                      </div>
                      <div class="num num-5">
                        <p>5</p>
                      </div>
                      <div class="num num-6">
                        <p>6</p>
                      </div>
                      <div class="num num-7">
                        <p>7</p>
                      </div>
                      <div class="num num-8">
                        <p>8</p>
                      </div>
                      <div class="num num-9">
                        <p>9</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="reload">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 65 65"
                enable-background="new 0 0 65 65" xml:space="preserve">
                <path fill="#2b2b2b" d="M60.2,2.5c-2.3-0.2-4.4,1.5-4.6,3.9l-0.2,2.3c-6-5.6-13.8-8.7-22-8.7C15.5,0,0.9,14.5,0.9,32.4c0,17.9,14.5,32.4,32.4,32.4
                              c12.3,0,23.5-6.9,29-17.9c1.1-2.1,0.2-4.7-1.9-5.7c-2.1-1.1-4.7-0.2-5.7,1.9c-4.1,8.1-12.3,13.2-21.4,13.2
                              c-13.2,0-23.9-10.7-23.9-23.9c0-13.2,10.7-23.9,23.9-23.9c6.1,0,11.9,2.3,16.4,6.5l-3.4-0.3c-2.3-0.2-4.4,1.5-4.6,3.9
                              c-0.2,2.3,1.5,4.4,3.9,4.6l12.7,1.1c0.1,0,0.3,0,0.4,0c1,0,2-0.3,2.7-1c0.9-0.7,1.4-1.8,1.5-2.9l1.2-13.4
                              C64.3,4.7,62.5,2.7,60.2,2.5z" />
              </svg>
              <p>NOW, WITH 12:34</p>
            </div>
          </div>
          <img src="../assets/img/Texture.png" alt="" class="texture">
          <img class="sombra" src="../assets/img/Vector4396.png" alt="">
          <img class="phone-5" src="../assets/img/img3.png" alt="">
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';

export default {
  name: 'HomeView',
  components: {
    TheHeader
  },
  data(){
    return {
      
    }
  }
}
</script>


<style></style>

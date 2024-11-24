<template>
  <div class="container">
    <div class="timer">
      <div class="texture"></div>
      <div class="t-text-box">
        <h1 class="h1">Save 20% or more <br> on Headset</h1>
        <p> Enjoy for a limited time</p>
        <div class="timerjs">
          <div class="hours">
            <div class="hour">
              <h1 class="t-h1" ref="hoursTens"><span class="number">{{ hoursTens }}</span></h1>
              <h1 class="t-h1" ref="hoursUnits"><span class="number">{{ hoursUnits }}</span></h1>
            </div>
            <p>Hours</p>
          </div>
          <div class="minutes">
            <div class="minute">
              <h1 class="t-h1" ref="minutesTens"><span class="number">{{ minutesTens }}</span></h1>
              <h1 class="t-h1" ref="minutesUnits"><span class="number">{{ minutesUnits }}</span></h1>
            </div>
            <p>Minutes</p>
          </div>
          <div class="seconds">
            <div class="second">
              <h1 class="t-h1" ref="secondsTens"><span class="number">{{ secondsTens }}</span></h1>
              <h1 class="t-h1" ref="secondsUnits"><span class="number">{{ secondsUnits }}</span></h1>
            </div>
            <p>Seconds</p>
          </div>
        </div>
        <button class="btn_hero">Shop now <div class="btn-ball"><img :src="setaSrc" alt=""></div></button>
        <span>Ends 18/08. Restrictions apply. See details</span>
      </div>
      <img :src="timerImageSrc" alt="">
      <img class="img-shadow" :src="shadowImageSrc" alt="">
    </div>
  </div>
</template>

<script>
import seta from '@/assets/img/seta.svg';
import timerImage from '@/assets/img/h-timer.svg';
import shadowImage from '@/assets/img/shadow.svg';

export default {
  data() {
    return {
      remainingTime: (12 * 3600) + (25 * 60) + 45, 
      hoursTens: 0,
      hoursUnits: 0,
      minutesTens: 0,
      minutesUnits: 0,
      secondsTens: 0,
      secondsUnits: 0,
      setaSrc: seta,
      timerImageSrc: timerImage,
      shadowImageSrc: shadowImage
    };
  },
  mounted() {
    console.log("Timer mounted");
    this.updateTimer();
    this.timer = setInterval(this.updateTimer, 1000);
  },
  beforeUnmount() {
    console.log("Timer before unmount");
    clearInterval(this.timer);
  },
  methods: {
    animateNumberChange(element, newValue) {
      
      const newNumber = document.createElement("span");
      newNumber.className = "number";
      newNumber.textContent = newValue;
      newNumber.style.opacity = "0"; 
      newNumber.style.transform = "translateY(-20px)"; 
      newNumber.style.transition = "opacity 0.8s ease, transform 0.8s ease";

      const currentNumber = element.querySelector(".number");

    
      currentNumber.style.transition = "opacity 0.8s ease, transform 0.4s ease";
      currentNumber.style.opacity = "0";
      currentNumber.style.transform = "translateY(-20px)"; 

      setTimeout(() => {
        currentNumber.textContent = newValue; 
        currentNumber.style.opacity = "1"; 
        currentNumber.style.transform = "translateY(0)";
      }, 400); 
    },
    updateTimer() {
      if (this.remainingTime < 0) {
        clearInterval(this.timer); 
        return;
      }

 
      const hours = Math.floor(this.remainingTime / 3600);
      const minutes = Math.floor((this.remainingTime % 3600) / 60);
      const seconds = this.remainingTime % 60;

      const hoursTens = Math.floor(hours / 10);
      const hoursUnits = hours % 10;
      const minutesTens = Math.floor(minutes / 10);
      const minutesUnits = minutes % 10;
      const secondsTens = Math.floor(seconds / 10);
      const secondsUnits = seconds % 10;   
      if (hoursTens !== this.hoursTens) {
        this.animateNumberChange(this.$refs.hoursTens, hoursTens);
        this.hoursTens = hoursTens;
      }
      if (hoursUnits !== this.hoursUnits) {
        this.animateNumberChange(this.$refs.hoursUnits, hoursUnits);
        this.hoursUnits = hoursUnits;
      }
      if (minutesTens !== this.minutesTens) {
        this.animateNumberChange(this.$refs.minutesTens, minutesTens);
        this.minutesTens = minutesTens;
      }
      if (minutesUnits !== this.minutesUnits) {
        this.animateNumberChange(this.$refs.minutesUnits, minutesUnits);
        this.minutesUnits = minutesUnits;
      }
      if (secondsTens !== this.secondsTens) {
        this.animateNumberChange(this.$refs.secondsTens, secondsTens);
        this.secondsTens = secondsTens;
      }
      if (secondsUnits !== this.secondsUnits) {
        this.animateNumberChange(this.$refs.secondsUnits, secondsUnits);
        this.secondsUnits = secondsUnits;
      }

     
      this.remainingTime--;
    },
  },
};
</script>
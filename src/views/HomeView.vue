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
    TweenMax.to(this, 0.5, {
      opacity: 0, onComplete: function () {
        reloadBtn.style.display = "none";
      }
    });
    TweenMax.to(timerEl, 1, { opacity: 1 });
    initTimer("12:35");
  });
});
</script>

<template>

    <Header_component></Header_component>
    <Hero_component></Hero_component>
    <Card_component></Card_component>
    <Showcase_component></Showcase_component>
    <Timer_component></Timer_component>
    <Carousel_component></Carousel_component>
    <Footer_component></Footer_component>  

</template>

<script>
import Header_component from '@/components/Header_component.vue';
import Hero_component from  '@/components/Hero_component.vue';
import Card_component from '@/components/Card_component.vue';
import Showcase_component from '@/components/Showcase_component.vue';
import Timer_component from '@/components/Timer_component.vue';
import Carousel_component from '@/components/Carousel_component.vue';
import Star_component from '@/components/Star_component.vue';
import Footer_component from '@/components/Footer_component.vue';

export default {
  name: 'HomeView',
  components: {
    Header_component,
    Hero_component,
    Card_component,
    Showcase_component,
    Timer_component,
    Carousel_component,
    Footer_component
  },
  data() {
    return {

    }
  }
}
</script>


<style></style>

<template>
  <section class="container-box">
    <div class="container">
      <div class="phone-box">
        <div class="banner-text-box">
          <h1>Save 20% or more on Headset</h1>
          <p>Enjoy for a limited time</p>

          <div class="timer">
            <h3>{{ hours }}:{{ minutes }}:{{ seconds }}</h3>
          </div>  

        </div>
        <img src="https://i.ibb.co/WgfMNm4/Texture.png" alt="" class="texture">
        <img class="sombra" src="https://i.ibb.co/f4KbWLH/Vector4396.webp" alt="">
        <img class="phone-5" src="https://i.ibb.co/kcCwvqf/img3.png" alt="">
      </div>
    </div>
  </section>
</template>


<script>

  export default {
  data() {
    return {
      totalSeconds: 12 * 60 * 60, 
      hours: 0,
      minutes: 0,
      seconds: 0,
      timerInterval: null 
    };
  },
  created() {
    this.updateTimer();
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      this.timerInterval = setInterval(() => {
        if (this.totalSeconds > 0) {
          this.totalSeconds--;
          this.updateTimer();
        } else {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    },
    updateTimer() {
      this.hours = Math.floor(this.totalSeconds / 3600);
      const remainingSecondsAfterHours = this.totalSeconds % 3600;
      this.minutes = Math.floor(remainingSecondsAfterHours / 60);
      this.seconds = remainingSecondsAfterHours % 60;

      this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
      this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
      this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    }
  },
  beforeDestroy() {
    clearInterval(this.timerInterval);
  }
};
</script>



<style>

.phone-box {
  position: relative;
  border-radius: 30px;
  width: 100%;
  height: 70vh;
  background-color: #000;
  background-image: linear-gradient(to left, #b4d5e4, #45789E);
  overflow: hidden;
}

.texture {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 0;
}

.sombra {
  position: absolute;
  right: 50px;
  width: 390px;
  bottom: -150px;
  opacity: 0.3;

}

.phone-5 {
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 20.31vw; /* 390px */
  height: 21.3vw; /* 409px */
}


.banner-text-box {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  position: absolute;
  color: white;
  z-index: 1;

  & h1 {
      font-size: 3.9vw; /* 75px */
  }

  & p {
      font-size: 1.25vw; /* 24px */
  }
}
.timer {
  width: 28.64vw; /* 550px */
  height: 12.91vw; /* 248px */
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -(550px / 2);
  margin-top: -(248px / 2);
  color: white;

  * {
      cursor: default;
  }

  h3 {
      width: 100%;
      font-size: 1.35vw; /* 26px */
      letter-spacing: 4px;
      text-align: center;
  }

  &--clock {
      width: 100%;
      position: relative;
      padding-left: 6px;
      margin-top: 22px;
      ;
      overflow: hidden;

      .clock-display-grp {
          width: 100%;
          position: relative;

          .number-grp {
              width: auto;
              display: block;
              height: 156px;
              float: left;
              overflow: hidden;

              .number-grp-wrp {
                  width: 100%;
                  position: relative;

                  .num {
                      width: 100%;
                      position: relative;
                      height: 156px;

                      p {
                          width: auto;
                          display: table;
                          font-size: 10.67vw; /* 205px */
                          line-height: 150px;
                          font-weight: bold;
                      }

                  }

              }

          }
      }

      .clock-separator {
          width: auto;
          float: left;
          display: block;
          height: 156px;

          p {
              width: auto;
              display: table;
              font-size: 205px;
              line-height: 150px;
              font-weight: bold;
          }

      }

  }

  h4 {
      width: 100%;
      font-size: 10px;
      letter-spacing: 6px;
      text-align: center;
      padding-top: 25px;
      float: left;
  }
}

.reload {
  width: 125px;
  height: 14px;
  position: absolute;
  bottom: 50vh;
  left: 50%;
  margin-left: -(125px / 2);
  opacity: 0;
  display: none;
  cursor: pointer;
  z-index: 9999;

  &:hover {
      svg path {
          fill: darken(white, 60%);
      }

      p {
          color: darken(white, 60%);
      }
  }

  svg {
      width: 12px;
      height: 12px;
      float: left;
      margin-right: 10px;
  }

  p {
      color: #2b2b2b;
      font-size: 12px;
      float: left;
      line-height: 11px;
  }
}


</style>
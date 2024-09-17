<template>
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
</template>

<script>
export default {
    name: 'HeadphonesSample',
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
    };
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
      };
    };
  }
}
</script>

<style scoped>
.container-box {
  overflow: hidden;
  width: 100%;
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  /* Permite que os itens quebrem para a próxima linha */
  flex-direction: row;
}
.container {
  width: 80%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.hp-card {
  border-radius: 30px;
  width: 27.6vw; /* 530px */
  height: 27.6vw; /* 530px */
  background-image: url(../img/fone.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  & h1 {
      color: white;
      font-size: 55px;
  }
}

.hp-card:hover {
  cursor: pointer;
  background-image: linear-gradient(to left, #0000005a, #0000005a), url(../img/fone.png);
}
.atribute {
  justify-content: center;
  display: flex;
  align-items: center;
  width: 240px;
  height: 78px;
  border-radius: 80px;
  background: rgba(49, 49, 49, 0.572);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
}

.atribute-box {
  align-items: center;
  display: flex;
  width: 90%;
  height: 90%;
}


.atribute-ball {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  justify-content: center;
  display: flex;
  font-size: 24px;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
}

.atribute-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 20px;
  color: #ffffff;
}
.hp-card2 {
  background-image: url(../img/5225ea06c091a3f8941951fba23f3d10.png);
  border-radius: 30px;
  width: 27.6vw; /* 530px */
  height: 27.6vw; /* 530px */
  background-position: 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  & h1 {
      color: white;
      font-size: 55px;
  }
}

.hp-card2:hover {
  cursor: pointer;
  background-image: linear-gradient(to left, #0000005a, #0000005a), url(../img/5225ea06c091a3f8941951fba23f3d10.png);
}
</style>
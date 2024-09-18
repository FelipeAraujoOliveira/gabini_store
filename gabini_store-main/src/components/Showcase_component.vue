<template>
    <section class="container-box2">
        <div class="container">
          <div class="phones-box">
            <h1>new products</h1>
            <p>Choose the headset that best suits your needs. We offer top-quality options with <br> a variety of features
              to enhance your audio experience</p>
            <div class="card-box">
              <div class="card">
                <div class="phone-efect">
                  <img class="phone3" src="https://i.ibb.co/qg7tQ3Y/g433-gallery-black-1-1-1.png" alt="">
                  <img src="https://i.ibb.co/09v2gkM/g433-gallery-black-1-1.png" alt="" class="phone4">
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
                  <img class="phone3" src="https://i.ibb.co/qg7tQ3Y/g433-gallery-black-1-1-1.png" alt="">
                  <img src="https://i.ibb.co/09v2gkM/g433-gallery-black-1-1.png" alt="" class="phone4">
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
                  <img class="phone3" src="https://i.ibb.co/qg7tQ3Y/g433-gallery-black-1-1-1.png" alt="">
                  <img src="https://i.ibb.co/09v2gkM/g433-gallery-black-1-1.png" alt="" class="phone4">
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

</template>


<script></script>


<style>

.phones-box {
    height: auto;
    padding: 80px 0px 80px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F3F5F9;
    border-radius: 30px;
    text-align: center;
    gap: 2.08vw; /* 40px */

    & h1 {
        font-size: 2.29vw; /* 44px */
        text-transform: uppercase;
    }

    & p {
        font-weight: 200;
    }
}

.card-box {
    width: 100%;
    align-items: center;
    justify-content: space-around;
    display: flex;
}

.card {
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & p {
        font-weight: 200;
    }

    & img {
        width: 244px;
        height: 267px;
    }

    & .prices {
        justify-content: center;
        position: relative;
        display: flex;
        gap: 3px;

        & {
            span {
                margin-top: 5px;
                color: red;
                text-decoration: line-through;

                font-weight: bold;
            }
        }

        & h1 {
            font-size: 40px;
        }

        & p {
            font-weight: bold;
            margin-top: 5px;
        }
    }
}

a {
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
}

.phone-efect {
    overflow: hidden;

    width: 244px;
    height: 267px;

    & .phone3:hover {
        display: none;
    }

    & .phone4 {
        display: none;
    }


}

.phone-efect:hover {
    & .phone4 {
        display: block;
    }
}



.cart-btn {
    width: 7.29vw; /* 140px */
    height: 2.6vw; /* 50px */
    padding-left: 20px;
    padding-right: 10px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    border-radius: 30px;
    background-color: #fff;
    font-size: 12px;
    border: 1px solid black;
}

.cart-icon-box {
    width: 1.56vw; /* 30px */
    height: 1.56vw; /* 30px */
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 12px;

    & i {
        margin: 0 !important;
    }
}

</style>
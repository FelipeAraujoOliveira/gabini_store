<template>
    <footer>
       <div class="container-box-footer">
           <div class="container-footer">
               <div class="container-content-footer">
                   <div class="logo-box-footer">
                       <img src="https://i.imgur.com/TkF8wmv.png" alt="logo">
                   </div>
                   <div class="title-box-footer">
                       <div class="line-box-footer">
                           <div class="line-footer">
                               <h1>Menu</h1>
                               <a href="">home</a>
                               <a href="">About Us</a>
                               <a href="">Product</a>
                               <a href="">Pricing</a>
                           </div>
                           <div class="line-footer">
                               <h1>Resources</h1>
                               <a href="">Forum</a>
                               <a href="">Support</a>
                               <a href="">Partners</a>
                               <a href="">Events</a>
                           </div>
                           <div class="line-footer">
                               <h1>My Account</h1>
                               <a href="">My orders</a>
                               <a href="">Faq</a>
                               <a href="">Sales conditions</a>
                               <a href="">Contact</a>
                               <a href="">Legal Mentions</a>
                           </div>
                       </div>
                       <div class="line-footer">
                           <h1>Subscribe to Newsletter</h1>
                           <p>Sign up for exclusive offers,  <br> stories, events and more.</p>
                           <input type="text" placeholder="Email Address">
                           <div class="circle">
                               <a href=""><i class="bi bi-arrow-right"></i></a>
                           </div>
                       </div>
                   </div>
                   <div class="gabini"><img class="gabini" src="https://i.imgur.com/TkF8wmv.png" alt="logo"></div>
                   <div class="footer">
                       <div class="footer-line"></div>
                       <div class="footer-links">
                           <p>&copy; 2024 Gabibi Headset Store. - All Rights  Reserved</p>
                           <ul>
                               <li><a href="">Products</a></li>
                               <li><a href="">Privacy Policy</a></li>
                               <li><a href="">Customer Service</a></li>
                           </ul>
                           <div class="icons"><i class="bi bi-twitter-x"></i><i class="bi bi-facebook"></i><i class="bi bi-instagram"></i><i class="bi bi-threads"></i><i class="bi bi-spotify"></i><i class="bi bi-linkedin"></i><i class="bi bi-tiktok"></i></div>
                       </div>
                   </div>
             </div>
           
           </div>
       </div>
   </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

* {
   font-family: "Inter", sans-serif;
   margin: 0;
   padding: 0;
}

.container-box-footer {
   margin-bottom: 50px;
   width: 100;
   height: auto;
   align-items: center;
   justify-content: center;
   display: flex;
}

.container-footer {
   position: relative;
   width: 80%;
   align-items: center;
   justify-content: center;
   display: flex;
   flex-direction: column;
   border-radius: 30px;
   background-color: black;
}

.container-content-footer {
   padding-bottom: 50px;
   position: relative;
   width: 90%;
   align-items: center;
   justify-content: center;
   display: flex;
   flex-direction: column;
   background-color: black;
}

.title-box-footer {
   width: 100%;
   display: flex;
   justify-content: space-between;
}

.logo-box-footer {
   display: flex;
   width: 100%;
   height: 100px;
   align-items: end;
   justify-content: left;
   margin-bottom: 30px;

   & img {
       filter: invert(1) brightness(2);
       max-width: 150px;
     }
}

.line-box-footer {
   display: flex;
   gap: 100px;
}

.line-footer {
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 20px;
   color: #fff;

   & h1 {
       font-size: 20px;
   }

   & a {
       text-decoration: none;
       color: gray;
   }
}

.gabini {
   margin-top: 20px;
   width: 100%;
   overflow: hidden;
   & img {
       filter: invert(0.2) brightness(1);
     }
}

.footer {
   overflow: hidden;
   width: 100%;
   height: 100px;
   background-color: black;
   display: flex;
   flex-direction: column;
   position: absolute;
   bottom: 0;
   padding-bottom: 20px;
}

.footer-line {
   margin-top: 30px;
   width: 1500px;
   height: 1px;
   background-color: rgb(71, 70, 70);
}

.footer-links {
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
   color: gray;
}

p {
   color: gray;
}

ul {
   display: flex;
   gap: 20px;
   text-transform: uppercase;
   list-style: none;
}

input {
   position: relative;
   width: 320px;
   padding: 18px 18px;
   border-radius: 30px;
   background-color: rgb(80, 79, 79);
   border: 1px #fff;
}

.circle {
   position: absolute;
   bottom: 28%;
   right: 10px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 40px;
   height: 40px;
   background-color: #fff;
   color: #000;
}

input::placeholder {
   color: #c9c9c9 ;
}

.icons {
   display: flex;
   gap: 5px;
   color: #fff;
}

a {
   font-size: 14px !important;
   color: gray !important;
}
</style>
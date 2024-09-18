<template>
     <header>
      <nav class="header-navbar">
        <div class="logo"> <img src="https://i.ibb.co/CJyvtyM/image-Photoroom.png" alt=""></div>
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
    </header>
</template>

<script>
</script>


<style>
   header {
    height: 12vh;
    position: relative;
    width: 80vw;
    display: flex;
    justify-content: center;
    border-bottom: 0.0052vw solid rgba(0, 0, 0, 0.105);
    }

    .header-navbar {
        z-index: 10;
        height: 13vh;
        width: 80vw;
        justify-content: space-between;
        align-items: center;
        display: flex;
        text-transform: uppercase;
        font-size: 1rem;
        /* 1rem */

        & ul {
            display: flex;
            list-style: none;
            justify-content: center;
            align-items: center;
            gap: 2.5rem;
            /* 40px */



            & a:hover {
                color: #366efc;
            }

        }

        & a {
            text-decoration: none;
            color: black;
        }

        & .sing-up {
            color: #366efc;
            margin-left: 2.5rem;
            /* 40px */
        }
    }


    .logo img {
        max-width: 9.4rem;
        /* 150px */
    }

    .dropdown {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: auto;
        position: relative;

        & ul {
            display: none;
        }

    }


    .dropdown-menu {
        width: 100%;
        text-align: left;
        position: absolute;
        background-color: #fff;
        box-shadow: 0px 28px 36px 0px rgba(0, 0, 0, 0.117);
        z-index: 1000;
        margin-top: 12.5vw;
        /* 240px */
        list-style: none;

        & .dropdown-submenu {
            display: none;
        }


    }

    .dropdown:hover .dropdown-menu {
        display: block;
    }


    .dropdown-submenu {
        background-color: #fff;
        box-shadow: 0px 28px 36px 0px rgba(0, 0, 0, 0.117);
        width: 100%;
        margin-left: 100%;
        top: 0;
        position: absolute;
    }

    .dropdown-item:hover .dropdown-submenu {
        display: block;
    }

    .dropdown-link {
        display: block;
        color: #333;
        text-decoration: none;
        white-space: nowrap;
        padding: 15px;
    }

    .line {
        width: 0.052vw;
        /* 1px */
        height: 1.04vw;
        /* 20px */
        background-color: rgba(94, 94, 94, 0.334);
    }

    .login-box {
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 20px;

        & a {
            margin: 0 !important;
        }

    }
</style>
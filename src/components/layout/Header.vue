<template>
    <header class="header">
        <div class="container p-relative">
            <nav class="nav">
                <img src="https://enricosotelo.github.io/img/Logo.png" alt="" class="logo">
                <button class="hamburger"></button>
                <ul class="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Bundle & Save</a></li>
                    <li class="dropdown">
                        <a href="#">Shop by category <i class="bi bi-chevron-down"></i></a>
                        <ul class="dropdown-content">
                            <li><a href="#">Item 1 <i class="bi bi-chevron-right"></i></a>
                                <ul class="sub-dropdown">
                                    <li><a href="#">Item 5</a></li>
                                    <li><a href="#">Item 6</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Item 2</a></li>
                            <li><a href="#">Item 3</a></li>
                            <li><a href="#">Item 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Support</a></li>
                    <div class="login-mb">
                        <a href="http://localhost:5173/login"><b>Sign in</b></a>
                        <div class="l-line"></div>
                        <a href="http://localhost:5173/register">Sign up for free</a>
                    </div>
                </ul>
                <div class="login">
                    <a href="http://localhost:5173/login"><b>Sign in</b></a>
                    <div class="l-line"></div>
                    <a href="http://localhost:5173/register">Sign up for free</a>
                </div>
            </nav>
        </div>
    </header>
</template>



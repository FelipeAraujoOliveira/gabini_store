<template>
    <header class="header">
        <div class="container p-relative">
            <nav class="nav">
                <img src="https://enricosotelo.github.io/img/Logo.png" alt="Logo" class="logo">
                <button class="hamburger"></button>
                <ul class="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Bundle & Save</a></li>
                    <li class="dropdown">
                        <a href="#">Shop by category <i class="bi bi-chevron-down"></i></a>
                        <ul class="dropdown-content">
                            <li>
                                <a href="#">Item 1 <i class="bi bi-chevron-right"></i></a>
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
                </ul>
                <div class="auth-section">
                    <template v-if="isLoggedIn">
                        <div class="user-profile" @click="goToProfile">
                            <img :src="userProfilePic" alt="Profile Icon" class="profile-pic" />
                            <span class="user-name">{{ userName }}</span>
                        </div>
                    </template>
                    <template v-else>
                        <div class="login">
                            <a href="/login"><b>Sign in</b></a>
                            <div class="l-line"></div>
                            <a href="/register">Sign up for free</a>
                        </div>
                    </template>
                </div>
            </nav>
        </div>
    </header>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            isLoggedIn: false,
            userName: '',
            userProfilePic: 'https://via.placeholder.com/50',
        };
    },
    methods: {
        checkLoginStatus() {
            const token = localStorage.getItem('authToken');
            if (token) {
                axios.get('https://localhost:7119/api/Usuario/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then(response => {
                        this.isLoggedIn = true;
                        this.userName = response.data.nomeDeUsuario;
                        this.userProfilePic = response.data.url_foto_perfil || this.userProfilePic;
                    })
                    .catch(() => {
                        this.isLoggedIn = false;
                    });
            }
        },
        goToProfile() {
            this.$router.push('/profile');
        },
    },
    mounted() {
        this.checkLoginStatus();
    },
};
</script>
<style scoped>
.auth-section {
    display: flex;
    align-items: center;
}

.user-profile {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 10px;
    transition: background-color 0.3s ease;
}

.user-profile:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
}

.profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
}

.user-name {
    font-size: 14px;
    font-weight: bold;
    color: #333;
}

.login {
    display: flex;
    align-items: center;
}

.login a {
    color: #007bff;
    text-decoration: none;
    margin: 0 5px;
}

.l-line {
    width: 1px;
    height: 20px;
    background-color: #ccc;
    margin: 0 5px;
}
</style>

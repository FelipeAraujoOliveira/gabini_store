<template>
    <div class="profile-page">
        <header class="header">
            <div class="container">
                <h1>Meu Perfil</h1>
            </div>
        </header>
        <main class="profile-container">
            <div class="user-info">
                <img :src="userProfilePic" alt="Foto do Perfil" class="profile-pic">
                <h2>{{ userName }}</h2>
                <p>{{ userEmail }}</p>
            </div>
            <div class="profile-actions">
                <button @click="editProfile" class="btn primary-btn">Editar Perfil</button>
                <button @click="logout" class="btn secondary-btn">Sair da Conta</button>
                <button @click="goBack" class="btn secondary-btn">Voltar</button>
                <button @click="goHome" class="btn secondary-btn">Voltar para a Home</button>
            </div>
        </main>
    </div>
</template>

<script>
import api from '@/api';

export default {
    data() {
        return {
            userName: '',
            userEmail: '',
            userProfilePic: '',
            errorMessage: ''
        };
    },
    methods: {
        async fetchUserData() {
            try {
                const response = await api.get('/Usuario/me');
                const userData = response.data;
                this.userName = userData.nomeDeUsuario;
                this.userEmail = userData.email;
                this.userProfilePic = userData.url_foto_perfil || 'https://via.placeholder.com/150';
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
                if (error.response && error.response.status === 401) {
                    this.errorMessage = 'Usuário não autenticado. Por favor, faça login novamente.';
                    this.logout();
                } else {
                    this.errorMessage = 'Erro ao buscar dados do usuário. Por favor, tente novamente mais tarde.';
                }
            }
        },
        editProfile() {
            this.$router.push('/edit-profile');
        },
        logout() {
            localStorage.removeItem('authToken');
            this.$router.push('/login');
        },
        goBack() {
            this.$router.go(-1);
        },
        goHome() {
            this.$router.push('/');
        }
    },
    mounted() {
        this.fetchUserData();
    }
};
</script>

<style scoped>
.profile-page {
    font-family: 'Arial', sans-serif;
    color: #333;
    text-align: center;
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
}

.header h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.user-info {
    text-align: center;
}

.profile-pic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #000;
}

h2 {
    font-size: 1.5rem;
    margin: 10px 0;
}

p {
    font-size: 1rem;
    color: #666;
}

.profile-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.btn {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.primary-btn {
    background-color: #000;
    color: #fff;
    border: none;
}

.primary-btn:hover {
    background-color: #333;
}

.secondary-btn {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
}

.secondary-btn:hover {
    background-color: #f0f0f0;
}

.error-message {
    color: red;
    font-size: 1rem;
    margin-top: 20px;
}
</style>
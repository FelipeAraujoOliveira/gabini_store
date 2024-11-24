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
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userName: 'Felipe',
            userEmail: 'felipe@gabini.com',
            userProfilePic: 'https://via.placeholder.com/150',
        };
    },
    methods: {
        editProfile() {
            
            this.$router.push('/edit-profile');
        },
        logout() {
           
            localStorage.removeItem('authToken');
            this.$router.push('/login');
        },
    },
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
</style>

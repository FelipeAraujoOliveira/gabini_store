<template>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
            <label for="profilePic">Foto do Perfil</label>
            <input type="text" id="profilePic" v-model="formData.profilePic" />
        </div>
        <button type="submit" class="btn primary-btn">Salvar</button>
    </form>
</template>

<script>
import api from '@/api';

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                profilePic: ''
            }
        };
    },
    methods: {
        async fetchUserData() {
            try {
                const response = await api.get('/Usuario/me');
                const userData = response.data;
                this.formData.name = userData.nomeDeUsuario;
                this.formData.email = userData.email;
                this.formData.profilePic = userData.url_foto_perfil;
            } catch (error) {
                console.error('Erro ao buscar dados do usuário:', error);
            }
        },
        async submitForm() {
            try {
                const payload = {
                    nomeDeUsuario: this.formData.name,
                    email: this.formData.email,
                    url_foto_perfil: this.formData.profilePic
                };
                await api.put('/Usuario/me', payload);
                alert('Perfil atualizado com sucesso!');
            } catch (error) {
                console.error('Erro ao atualizar perfil:', error);
                alert('Ocorreu um erro ao tentar atualizar o perfil.');
            }
        }
    },
    mounted() {
        this.fetchUserData();
    }
};
</script>

<style scoped>
.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
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
</style>
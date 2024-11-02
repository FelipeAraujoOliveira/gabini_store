<template>
    <div class="login">
        <div class="text-box">
            <img src="https://i.ibb.co/CJyvtyM/image-Photoroom.png" alt="logo" class="logo" />
            <h1>BEM VINDO de volta</h1>
            <p>Acesse sua conta agora mesmo</p>
        </div>
        <div class="form">
            <form @submit.prevent="login">
                <input type="email" class="form-control" v-model="email" placeholder="Email" required />
                <input type="password" class="form-control" v-model="senha" placeholder="Senha" required />
                <a href="#" class="forgot-password d-block mb-3">Esqueci minha senha</a>
                <button type="submit" class="btn">Entrar</button>
                <div>
                    Não tem uma conta? <a href="/register" class="text-primary font-weight-bold">Cadastre-se</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { login } from '@/api.js';

export default {
    data() {
        return {
            email: '',
            senha: '',
            errorMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await login(this.email, this.senha);
                console.log('Login bem-sucedido:', response);
                localStorage.setItem('authToken', response.token);
                // Redirecionar ou mostrar mensagens de sucesso
            } catch (error) {
                this.errorMessage = 'Erro ao fazer login: ' + (error.response ? error.response.data.title : error.message);
                console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
            }
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;
}

a {
    text-decoration: none;
    color: rgb(16, 84, 255);
    text-transform: lowercase;
}

p {
    font-size: 20px;
    max-width: 13rem;
    color: gray;
}

.logo {
    width: 200px;
}

.login {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-box {
    max-width: 15%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

form {
    margin-left: 20px;
    max-width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: nowrap;
}

input {
    padding: 14px 28px;
    border-radius: 30px;
    border: none;
    background: rgb(239, 239, 239);
}

.btn {
    padding: 14px 28px;
    border-radius: 30px;
    transition: 400ms;
    background: #fff;
    color: black;
    font-weight: bold;
    border: 1px solid black;
    cursor: pointer;
}

.form-step {
    & input {
        margin-bottom: 20px;
    }
}

.btn:hover {
    filter: invert(1);
}

@media screen and (max-width: 844px) {
    .login {
        flex-direction: column;
    }
}
</style>
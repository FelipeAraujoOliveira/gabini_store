<template>
    <div class="login">
        <div class="text-box">
            <img src="https://i.ibb.co/CJyvtyM/image_url-Photoroom.png" alt="logo" class="logo" />
            <h1>BEM VINDO de volta</h1>
            <p>Acesse sua conta agora mesmo</p>
        </div>
        <div class="form">
            <form @submit.prevent="submitLogin">
                <input type="email" class="form-control" v-model="email" placeholder="Email" required />
                <input type="password" class="form-control" v-model="password" placeholder="Senha" required />
                <a href="#" class="forgot-password d-block mb-3">Esqueci minha senha</a>
                <button type="submit" class="btn">Entrar</button>
                <div>
                    NÃ£o tem uma conta? <a href="/register" class="text-primary font-weight-bold">Cadastre-se</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';


export default {
    data() {
        return {
            email: '',
            password: '', // Corrigido de 'senha' para 'password'
            showLogo: true
        };
    },
    methods: {
        async submitLogin() {
            try {
                const response = await axios.post('https://localhost:7119/api/Auth/signIn', {
                    email: this.email,
                    password: this.password
                });

                console.log("Resposta completa da API de Login:", response.data);

                const token = response.data; // Supondo que a API retorne apenas o token

                if (token) {
                    localStorage.setItem('authToken', token);
                    console.log('Login realizado com sucesso!');
                    this.$router.push('/'); // Redireciona para a página principal
                } else {
                    console.error('Token não retornado pela API de login.');
                }
            } catch (error) {
                console.error('Erro no login:', error);
            }
        }

    },
    mounted() {
        setTimeout(() => {
            this.showLogo = false;
        }, 100);
    },
    components: {
        RouterLink
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
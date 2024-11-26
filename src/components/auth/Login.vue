<template>
    <div class="login">
        <div class="text-box">
            <img src="https://i.ibb.co/CJyvtyM/image_url-Photoroom.png" alt="logo" class="logo" />
            <h1>BEM VINDO de volta</h1>
            <p>Acesse sua conta agora mesmo</p>
        </div>
        <div class="form">
            <form @submit.prevent="submitLogin">
                <!-- Mensagem de erro -->
                <div v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                </div>

                <input type="email" name="email" class="form-control" v-model="email" placeholder="Email" required />
                <input type="password" name="password" class="form-control" v-model="password" placeholder="Senha" required />
                <a href="#" class="forgot-password d-block mb-3">Esqueci minha senha</a>
                <button type="submit" id="entrar" class="btn">Entrar</button>
                <div>
                    NÃo tem uma conta? <a href="/register" class="text-primary font-weight-bold">Cadastre-se</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
// import { errorMessages } from 'vue/compiler-sfc';


export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
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

                const token = response.data;      
                
                if (token) {
                    localStorage.setItem('authToken', token.token);
                    console.log('Login realizado com sucesso!');
                    this.$router.push('/'); 
                } else {
                    console.error('Token não retornado pela API de login.');
                }
            } catch (error) {
                // console.error('Erro no login:', error);
                console.log(error.response.data);
                // Define a mensagem de erro com base na resposta da API ou no erro local
                this.errorMessage = error.response?.data?.message || 'Ocorreu um erro ao realizar login. Tente novamente.';
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
    font-size: 70px !important;
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

.error-message {
    color: red;
    font-weight: bold;
    background-color: rgba(255, 0, 0, .3);
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 15px;
    text-align: center;
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
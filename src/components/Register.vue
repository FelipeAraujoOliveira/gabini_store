<template>
    <div class="login">
        <div class="text-box">
            <img src="https://i.ibb.co/CJyvtyM/image_url-Photoroom.png" alt="logo" class="logo" />
            <h1>CRIAR CONTA</h1>
            <p>Preencha os dados abaixo para se cadastrar</p>
        </div>
        <div class="form">
            <form>
                <!-- Passo 1 -->
                <div class="form-step" v-show="currentStep === 0">
                    <input type="text" class="form-control" v-model="formData.nomeCompleto" placeholder="Nome completo"
                        required />
                    <input type="email" class="form-control" v-model="formData.email" placeholder="Email" required />
                    <input type="text" class="form-control" v-model="formData.telefone" placeholder="Telefone"
                        required />
                    <input type="text" class="form-control" v-model="formData.nomeDeUsuario"
                        placeholder="Nome de usuário" required />
                </div>

                <!-- Passo 2 -->
                <div class="form-step" v-show="currentStep === 1">
                    <input type="text" class="form-control" v-model="formData.enderecos[0].rua" placeholder="Rua"
                        required />
                    <input type="text" class="form-control" v-model="formData.enderecos[0].numero" placeholder="Número"
                        required />
                    <input type="text" class="form-control" v-model="formData.enderecos[0].complemento"
                        placeholder="Complemento" />
                    <input type="text" class="form-control" v-model="formData.enderecos[0].cidade" placeholder="Cidade"
                        required />
                    <input type="text" class="form-control" v-model="formData.enderecos[0].estado" placeholder="Estado"
                        required />
                    <input type="text" class="form-control" v-model="formData.enderecos[0].cep" placeholder="CEP"
                        required />
                </div>

                <!-- Passo 3 -->
                <div class="form-step" v-show="currentStep === 2">
                    <input type="password" class="form-control" v-model="formData.senha" placeholder="Senha" required />
                    <input type="password" class="form-control" v-model="confirmPassword"
                        placeholder="Confirme sua senha" required />
                    <input type="date" class="form-control" v-model="formData.dataNascimento"
                        placeholder="Data de nascimento" required />
                    <input type="text" class="form-control" v-model="formData.cpf" placeholder="CPF" required />
                    <input type="text" class="form-control" v-model="formData.url_foto_perfil"
                        placeholder="url_foto_perfil" required />
                </div>

                <!-- Passo 4 -->
                <div class="form-step" v-show="currentStep === 3">
                    <p>Revise suas informações antes de finalizar o cadastro.</p>
                    <br />
                    <div v-for="(value, key) in formData" :key="key" class="review-item">
                        <strong>{{ formatKey(key) }}:</strong> {{ typeof value === 'object' ? JSON.stringify(value) :
                        value }}
                    </div>
                </div>

                <!-- Botões de navegação -->
                <div class="navigation">
                    <button type="button" @click="prevStep" class="btn" v-if="currentStep > 0">Anterior</button>
                    <button type="button" @click="nextStep" class="btn">
                        {{ currentStep === 3 ? 'Cadastrar' : 'Próximo' }}
                    </button>
                </div>

                <div id="step-indicator" class="step-indicator" style="text-align: left;">{{ currentStep + 1 }}/4</div>

                <div>Já tem uma conta? <a href="/login" class="text-primary font-weight-bold">Entrar</a></div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            currentStep: 0,
            confirmPassword: '',
            formData: {
                nomeCompleto: '',
                email: '',
                telefone: '',
                nomeDeUsuario: '',
                senha: '',
                dataNascimento: '',
                cpf: '',
                ativo: true,
                url_foto_perfil: '',
                enderecos: [
                    {
                        rua: '',
                        numero: '',
                        complemento: '',
                        cidade: '',
                        estado: '',
                        cep: ''
                    },
                ],
            }
        };
    },
    methods: {
        async registerUser() {
            try {
                
                const payload = {
                    usuario: {
                        nomeCompleto: this.formData.nomeCompleto,
                        email: this.formData.email,
                        senha: this.formData.senha,
                        cpf: this.formData.cpf,
                        telefone: this.formData.telefone,
                        nomeDeUsuario: this.formData.nomeDeUsuario,
                        url_foto_perfil: this.formData.url_foto_perfil,
                    },
                    endereco: {
                        rua: this.formData.enderecos[0].rua,
                        numero: this.formData.enderecos[0].numero,
                        complemento: this.formData.enderecos[0].complemento,
                        cidade: this.formData.enderecos[0].cidade,
                        estado: this.formData.enderecos[0].estado,
                        cep: this.formData.enderecos[0].cep,
                    }
                };

                console.log("Dados enviados:", JSON.stringify(payload));

               
                const response = await axios.post('https://localhost:7119/api/Usuario', payload, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                alert("Cadastrado com sucesso!");
                console.log("Resposta do backend:", response.data);
            } catch (error) {
                console.error("Erro ao cadastrar usuário:", error);
                alert("Ocorreu um erro ao tentar cadastrar o usuário.");
            }
        },
        nextStep() {
            if (this.currentStep === 2 && this.formData.senha !== this.confirmPassword) {
                alert("As senhas não coincidem!");
                return;
            }

            if (this.currentStep < 3) {
                this.currentStep++;
            } else {
                this.registerUser();
            }
        },
        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },
        formatKey(key) {
            const keyMap = {
                nomeCompleto: 'Nome completo',
                email: 'Email',
                telefone: 'Telefone',
                nomeDeUsuario: 'Nome de usuário',
                senha: 'Senha',
                dataNascimento: 'Data de nascimento',
                cpf: 'CPF',
                url_foto_perfil: 'URL da Foto de Perfil',
                ativo: 'Ativo',
                enderecos: 'Endereço',
            };
            return keyMap[key] || key;
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

.review-item {
    margin-bottom: 10px;
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
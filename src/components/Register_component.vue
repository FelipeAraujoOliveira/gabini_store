<template>
    <div class="login">
        <div class="text-box">
            <img src="https://i.ibb.co/CJyvtyM/image-Photoroom.png" alt="logo" class="logo" />
            <h1>CRIAR CONTA</h1>
            <p>Preencha os dados abaixo para se cadastrar</p>
        </div>
        <div class="form">
            <form>
            
                <div class="form-step" v-show="currentStep === 0">
                    <input type="text" class="form-control" v-model="formData.fullName" placeholder="Nome completo" required />
                    <input type="email" class="form-control" v-model="formData.email" placeholder="Email" required />
                    <input type="text" class="form-control" v-model="formData.phone" placeholder="Telefone" required />
                    <input type="text" class="form-control" v-model="formData.username" placeholder="Nome de usuário" required />
                </div>

                
                <div class="form-step" v-show="currentStep === 1">
                    <input type="text" class="form-control" v-model="formData.address" placeholder="Endereço" required />
                    <input type="text" class="form-control" v-model="formData.city" placeholder="Cidade" required />
                    <input type="text" class="form-control" v-model="formData.state" placeholder="Estado" required />
                    <input type="text" class="form-control" v-model="formData.zip" placeholder="CEP" required />
                </div>

              
                <div class="form-step" v-show="currentStep === 2">
                    <input type="password" class="form-control" v-model="formData.password" placeholder="Senha" required />
                    <input type="password" class="form-control" v-model="formData.confirmPassword" placeholder="Confirme sua senha" required />
                    <input type="text" class="form-control" v-model="formData.birthDate" placeholder="Data de nascimento" required />
                    <input type="text" class="form-control" v-model="formData.cpf" placeholder="CPF" required />
                </div>

                <div class="form-step" v-show="currentStep === 3">
                    <p>Revise suas informações antes de finalizar o cadastro.</p>
                    <br>
                    <div>
                        <div v-for="(value, key) in formData" :key="key" class="review-item">
                            <strong>{{ formatKey(key) }}:</strong> {{ value }}
                        </div>
                    </div>
                </div>

                <div class="navigation">
                    <button type="button" @click="prevStep" class="btn" v-if="currentStep > 0">Anterior</button>
                    <button type="button" @click="nextStep" class="btn">
                        {{ currentStep === 3 ? 'Cadastrar' : 'Próximo' }}
                    </button>
                </div>

            
                <div id="step-indicator" class="step-indicator" style="text-align: left;">{{ currentStep + 1 }}/4</div>

                <div>
                    Já tem uma conta? <a href="/login" class="text-primary font-weight-bold">Entrar</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 0,
            formData: {
                fullName: '',
                email: '',
                phone: '',
                username: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                password: '',
                confirmPassword: '',
                birthDate: '',
                cpf: '',
            }
        };
    },
    methods: {
        nextStep() {
            if (this.currentStep < 3) {
                this.currentStep++;
            } else {

                alert("Cadastrado com sucesso!");
                console.log(this.formData);
            }
        },
        prevStep() {
            if (this.currentStep > 0) {
                this.currentStep--;
            }
        },
        formatKey(key) {
            const keyMap = {
                fullName: 'Nome completo',
                email: 'Email',
                phone: 'Telefone',
                username: 'Nome de usuário',
                address: 'Endereço',
                city: 'Cidade',
                state: 'Estado',
                zip: 'CEP',
                password: 'Senha',
                confirmPassword: 'Confirme sua senha',
                birthDate: 'Data de nascimento',
                cpf: 'CPF',
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

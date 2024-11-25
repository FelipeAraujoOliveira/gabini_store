<template>
    <div class="edit-profile-page">
        <main class="edit-profile-container">
            <EditProfileForm @success="showSuccessMessage" />
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
            <button @click="goBack" class="btn">Voltar</button>
        </main>
    </div>
</template>

<script>
import EditProfileForm from '@/components/profile/EditProfileForm.vue';

export default {
    components: {
        EditProfileForm
    },
    data() {
        return {
            successMessage: ''
        };
    },
    methods: {
        showSuccessMessage() {
            this.successMessage = 'Perfil atualizado com sucesso!';
        },
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.edit-profile-page {
    font-family: 'Arial', sans-serif;
    color: #333;
    text-align: center;
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
}

.header h1 {
    font-size: 1rem !important;
    font-weight: bold;
    margin-bottom: 20px;
}

.edit-profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.success-message {
    color: green;
    font-size: 1rem;
    margin-top: 20px;
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
<template>
    <div class="edit-profile-page">
        <header class="header">
            <div class="container">
                <h1>Editar Perfil</h1>
            </div>
        </header>
        <main class="edit-profile-container">
            <EditProfileForm @success="showSuccessMessage" />
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
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
    font-size: 2rem;
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
</style>
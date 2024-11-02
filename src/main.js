import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importando o router

const app = createApp(App);
app.use(router); // Usando o router
app.mount('#app');

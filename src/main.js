<<<<<<< Updated upstream
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importando o router

const app = createApp(App);
app.use(router); // Usando o router
app.mount('#app');
=======
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import router from './router';
import './assets/styles/style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
>>>>>>> Stashed changes

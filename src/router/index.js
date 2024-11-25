import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< Updated upstream
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

import Cart from '@/components/Cart_component.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
  ],
=======
import HomeView from '@/views/home/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import ProfileView from '@/views/profile/ProfileView.vue';
import EditProfileView from '@/views/profile/EditProfileView.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/edit-profile', name: 'edit-profile', component: EditProfileView }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes
>>>>>>> Stashed changes
});

export default router;

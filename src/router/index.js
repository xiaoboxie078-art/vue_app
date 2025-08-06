import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import VersionManager from '../views/VersionManager.vue';
import Home from '../views/Home.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/version-manager', component: VersionManager },
  { path: '/home', component: Home }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
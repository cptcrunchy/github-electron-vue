import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Repo from './components/Repo.vue';
// auth https://github.com/vuejs/vue-router/blob/dev/examples/auth-flow/app.js

const routes = [    
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/github-repo',
    name: 'github-repo',
    component: Repo
  }

];

export default routes;
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import RepoList from './components/RepoList.vue';
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
    path: '/repos',
    name: 'user-repos',
    component: RepoList
  },
  { 
    path: '/repos/:id',
    component: Repo,
    props: true 
  },
];

export default routes;
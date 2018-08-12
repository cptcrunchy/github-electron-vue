import Login from './components/Login.vue';
import Home from './components/Home.vue';
import RepoList from './components/RepoList.vue';
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
    component: RepoList,
    props: true 
  },
];

export default routes;
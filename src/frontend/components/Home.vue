<template lang="jade">
  .container
    .home
      span Hello {{ username }}
    .repos
      span
</template>

<script>
  
  export default {
    name: 'home',
    computed: {
      username() {
        return this.$store.getters.username
      },
      getRepos() {
        return this.$store.getters.repos
      }
    },
    // TODO: Push this in router
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (!vm.$store.getters.isAuthenticated) {
          vm.$router.push({name: 'login'});
        } else {
          next();
        }
      });
    }
  }
</script>
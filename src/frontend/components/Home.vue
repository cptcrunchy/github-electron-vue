<template lang="jade">
  .home
    span Hello {{ username }}
    span Repo {{ userRepos }}
    
</template>

<script>
  export default {
    name: 'home',
    computed: {
      username() {
        return this.$store.getters.username;
      },
      userRepos() {
        return this.$store.getters.userRepos;
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
<template lang="jade">

  .container
    .home
      span Hello {{ username }}. Select the GitHub Repo you want to check for missing exercises.
    .collection
      repolist

</template>

<script>
  import RepoList from './RepoList.vue';
  
  export default {
    name: 'home',
    computed: {
      username: function() {
        return this.$store.getters.username
      }
    },
    components: {
      repolist: RepoList
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
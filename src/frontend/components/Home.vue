<template lang="jade">

  v-container(fill-height='')
    v-flex(shrink='')
        h4.display-5 Welcome, {{ username }}
        v-subheader Please select the GitHub Repo you want to see.
    v-divider
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
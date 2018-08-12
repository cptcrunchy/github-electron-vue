<template lang="jade">
    router-view
</template>

<script>
  
  export default {
    name: 'home',
    computed: {

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
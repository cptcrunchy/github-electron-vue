<template lang="jade">  
v-flex(xs12='', sm6='')
  v-card
    v-card-title(primary-title)
      h3(class="headline mb-0") {{ userRepo.name }}
    v-btn(flat) View in Github
    v-btn(flat @click.native="goBack()") Go Back
</template>

<script>

  export default {
    name: 'repo',
    data: function() {
      return {
        repo: null
      }
    },
    computed: {
      id: function() {
        return this.$route.params.id;
      },
      userRepo: function() {
        let id = Number(this.$route.params.id);
        return Array
          .from(this.$store.getters.getRepos)
          .find(repo => {
            return repo.id === id;
          });
      }
    },
    methods:{
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    }
  }

</script>
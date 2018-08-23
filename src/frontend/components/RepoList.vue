<template lang="jade">  
v-flex(xs12='', sm6='')
  h4.display-5 Welcome, {{ username }}
  |           
  v-divider
  v-card
    v-list(subheader='')
      v-subheader(inset='') Please select the GitHub Repo you want to see.
      |         
      v-list-tile(v-for='(repo, index) in userRepos', v-bind:repo="repo.full_name", :key='repo.full_name', @click.native="navigate(repo.id)")
        v-list-tile-avatar
          font-awesome-icon(:icon="['fab', 'github']", size='2x')
        |           
        v-list-tile-content
          v-list-tile-title {{ repo.full_name.substring(username.length + 1) }}
        |             
        font-awesome-icon(:icon="['fas', 'code-branch']", size='2x')
</template>

<script>
  
  export default {
    name: 'repolist',
    computed: {
      userRepos: function() {
        const codeupRepos = Array.from(this.$store.getters.getRepos).filter(repo => {
          return repo.full_name.toLowerCase().includes('codeup-'.toLowerCase())
        })

        return codeupRepos
      },
      username: function() {
        return this.$store.getters.username
      }
    },
    methods:{
      navigate: function(id) {
        console.log('Navigate to repo: ', id);
        this.$router.push('/repos/'.concat(id));
      }
    }
  }

</script>
<template lang="jade">  
v-flex(xs12='', sm6='')
  h4.display-5 Welcome, {{ username }}
  |           
  v-divider
  v-card
    v-list(two-line='', subheader='')
      v-subheader(inset='') Please select the GitHub Repo you want to see.         
      |         
      v-list-tile(v-for='repo in userRepos', :key='repo')
        v-list-tile-avatar
          font-awesome-icon(:icon="['fab', 'github']", size='2x')
        |           
        v-list-tile-content
          v-list-tile-title {{ repo }}
        |             
        font-awesome-icon(:icon="['fas', 'code-branch']", size='2x')
</template>

<script>
  
  export default {
    name: 'repo',
    computed: {
      userRepos: function() {
        return this.$store.getters.getRepos
      },
      username: function() {
        return this.$store.getters.username
      }
    },
  }

</script>
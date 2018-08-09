<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line subheader>
          <v-subheader inset>My Repos</v-subheader>

          <v-list-tile
            v-for="repo in userRepos"
            :key="repo"
                       
          >
            <v-list-tile-avatar>
              <font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ repo }}</v-list-tile-title>
            </v-list-tile-content>
                <font-awesome-icon :icon="['fas', 'code-branch']" size="2x"></font-awesome-icon>
            <v-list-tile-action>
              <!-- <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn> -->
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  
  export default {
    name: 'repo',
    computed: {
      userRepos: function() {
        return this.$store.getters.getRepos
      }
    },
  }

</script>
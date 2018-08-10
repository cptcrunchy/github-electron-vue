<template lang="jade">
  v-app#inspire
    app-header 
    v-container(fluid='', fill-height='')
      v-layout(row, wrap, justify-center='')
        router-view
    v-footer.secondary(light, app='', fixed='')
      span &copy; 2018
</template>

<script>
  import Header from './Header.vue';

  export default {
    name: 'app',
    components: {
      'app-header': Header
    }
  }
</script>

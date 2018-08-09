<template lang="jade">

  v-app#inspire(dark='')
    app-header
    router-view
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

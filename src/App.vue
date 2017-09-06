<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/header.vue';
    export default {
      components: {
        'v-header': Header
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

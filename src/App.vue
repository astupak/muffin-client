<template>
  <v-app id="app" dark>
    <v-container fluid fill-height class="ma-0 pa-0">
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import 'reset-css';

export default {

};
</script>

<style lang="stylus">
@import './stylus/main'

:root {
  height: 100%;
}

#app {
  height: inherit;
}

body {
  height: inherit;
}
</style>

<template>
  <div id="app">
      <router-view/>
  </div>
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

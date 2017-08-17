<template>
  <v-layout row align-center justify-center fill-height>
    <v-flex xs4  class="pa-0">
      <slot/>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'app-entry-layout',
};
</script>

<template>
  <v-layout justify-center>
    <v-flex xs12 sm6 class="mt-5">
      <slot/>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'app-entry-layout',
};
</script>

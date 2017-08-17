<template>
  <app-entry-layout>
    <router-view slot="content"/>
  </app-entry-layout>
</template>

<script>
import EntryLayout from '@/shared/layouts/entry/entryLayout';

export default {
  components: {
    'app-entry-layout': EntryLayout,
  },
};
</script>

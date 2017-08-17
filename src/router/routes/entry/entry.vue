<template>
  <app-entry-layout>
    <div slot="content">
      <router-view />
    </div>

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

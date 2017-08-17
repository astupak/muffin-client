<template>
  <app-entry-layout>
    <div slot="content">
      <router-view />
      123
      <p>5555</p>
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

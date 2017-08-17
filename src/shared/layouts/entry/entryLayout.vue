<template>
  <div class="app-entry-layout">
    <entry-content>
      <slot name="content"></slot>
    </entry-content>
  </div>
</template>

<script>
import EntryContent from './entryContent';

export default {
  name: 'app-entry-layout',
  components: {
    'entry-content': EntryContent,
  },
};
</script>

<style lang = "scss">
.app-entry-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>

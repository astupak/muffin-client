<template>
  <app-workspace-layout>
    <router-view slot="header"/>
    <router-view slot="content"/>
  </app-workspace-layout>
</template>

<script>
import WorkspaceLayout from '@/shared/layouts/workspace/workspaceLayout';

export default {
  components: {
    'app-workspace-layout': WorkspaceLayout,
  },
};
</script>

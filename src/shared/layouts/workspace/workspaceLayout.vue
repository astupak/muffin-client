<template>
  <div class="app-workspace-layout">
    <workspace-header>
      <slot name="header"></slot>
    </workspace-header>
    <workspace-content>
      <slot name="content"></slot>
    </workspace-content>
  </div>
</template>

<script>
import WorkspaceHeader from './workspaceHeader';
import WorkspaceContent from './workspaceContent';

export default {
  name: 'app-workspace-layout',
  components: {
    'workspace-header': WorkspaceHeader,
    'workspace-content': WorkspaceContent,
  },
};
</script>

<style lang = "scss">
.app-workspace-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>

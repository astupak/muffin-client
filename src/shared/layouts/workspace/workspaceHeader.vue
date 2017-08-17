<template>
    <div class="app-workspace-header">
      <slot></slot>
    </div>
</template>

<style lang = "scss">
@import "~color-theme";

.app-workspace-header {
  align-content: stretch;
  align-items: center;
  align-self: flex-start;
  background: $primary-color;
  color: $primary-color-text;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;
}
</style>

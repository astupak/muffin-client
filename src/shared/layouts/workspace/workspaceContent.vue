<template>
    <div class="app-workspace-content">
      <slot></slot>
    </div>
</template>

<style lang = "scss">
@import "~color-theme";

.app-workspace-content {
  display: flex;
  background: $background-color;
  height: 100%;
  width: 100%;
}
</style>

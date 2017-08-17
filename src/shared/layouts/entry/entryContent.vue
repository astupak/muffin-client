<template>
    <div class="app-entry-content">
      <slot></slot>
    </div>
</template>

<style lang = "scss">
@import "~color-theme";

.entry-content {
  display: flex;
  background: $background-color;
  height: 100%;
  width: 100%;
}
</style>

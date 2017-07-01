<template>
    <div class="basic-content">
      <slot></slot>
    </div>
</template>

<style lang="scss">
@import "~color-theme";

.basic-content {
  display: flex;
  background: $background-color;
  height: 100%;
  width: 100%;
}
</style>

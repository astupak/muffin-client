<template>
    <div class="basic-footer">
      <slot></slot>
    </div>
</template>

<style lang="scss">
@import "~color-theme";

.basic-footer {
  display: flex;
  background: $primary-color-dark;
  height: 25px;
  width: 100%;
}
</style>

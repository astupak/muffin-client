<template>
    <div class="basic-footer">
      <slot>
        <default-footer/>
      </slot>
    </div>
</template>

<script>
  import DefaultFooter from '../components/basicFooter';

  export default {
    components: {
      'default-footer': DefaultFooter,
    },
  };
</script>

<style lang="scss">
@import "~color-theme";

.basic-footer {
  align-content: stretch;
  align-items: center;
  align-self: flex-start;
  background: $primary-color-dark;
  color: $primary-color-text;
  display: flex;
  height: 25px;
  justify-content: center;
  width: 100%;
}
</style>

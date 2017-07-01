<template>
  <router-view name="layout">
      <router-view name="header" slot="header"></router-view>
      <router-view name="content" slot="content"></router-view>
      <router-view name="footer" slot="footer"></router-view>
  </router-view>
</template>

<script>
export default {
  name: 'app-layout',
};
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>

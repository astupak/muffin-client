<template>
  <div class="basic-layout">
    <basic-header>
      <slot name="header"></slot>
    </basic-header>
    <basic-content>
      <slot name="content"></slot>
    </basic-content>
    <basic-footer>
      <slot name="footer"></slot>
    </basic-footer>
  </div>
</template>

<script>
import BasicHeader from './basicHeader';
import BasicContent from './basicContent';
import BasicFooter from './basicFooter';

export default {
  name: 'basic-layout',
  components: {
    'basic-header': BasicHeader,
    'basic-content': BasicContent,
    'basic-footer': BasicFooter,
  },
};
</script>

<style lang="scss">
.basic-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>

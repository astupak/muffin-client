<template>
<div class="parent">
  <div class="child">
    12313123123123
  </div>
</div>
  
</template>

<script>
export default {

};
</script>

<style lang = "scss">
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

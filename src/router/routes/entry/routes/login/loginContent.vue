<template>
<div class="parent">
  <div class="child">
    <button @click="login()">login</button>
  </div>
</div>
  
</template>

<script>
export default {
  methods: {
    async login() {
      this.$store.dispatch('login', {
        email: '***',
        password: '***',
      });
    },
  },
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

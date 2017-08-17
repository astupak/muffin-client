<template>
    <button @click="login()">join</button>
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

<template>
    <v-card tile class="elevation-0">
      <v-card-text class="grey">
          <v-layout row>
            <v-flex>
             <v-text-field
              label="Enter your email"
            ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex>
            <v-text-field
              label="Enter your password"
              type="password"
            ></v-text-field>

            </v-flex>            
          </v-layout>
      </v-card-text>
      <v-card-actions class="accent">
        <v-layout row justify-end>
          <v-btn>Enter</v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
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

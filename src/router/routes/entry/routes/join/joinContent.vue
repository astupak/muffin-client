<template>
    <v-card tile>
      <form @submit.prevent="join">
        <v-card-text>
          <v-container>
              <v-layout row>
                <v-flex>
                  <v-text-field
                  name="name"
                  label="Name"
                  id="name"
                  placeholder="username"
                  v-model="name"
                  :rules="[nameValidator]"
                  required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex>
                  <v-text-field
                  name="email"
                  label="Mail"
                  id="email"
                  placeholder="example@example.com"
                  v-model="email"
                  type="email"
                  :rules="[emailValidator]"
                  required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex>
                  <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  placeholder="password"
                  v-model="password"
                  type="password"
                  :rules="[passwordValidator]"
                  required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex>
                  <v-text-field
                  name="confirmPassword"
                  label="Confirm Password"
                  id="confirmPassword"
                  placeholder="password"
                  v-model="confirmPassword"
                  type="password"
                  :rules="[passwordValidator, comparePasswords]"
                  required>
                  </v-text-field>
                </v-flex>
              </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions class="secondary">
          <v-layout>
            <v-flex class="text-sm-right">
              <v-btn type="submit" :disabled="!formCompleted" class="primary">Sign Up</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </form>
    </v-card>
</template>

<script>
  // import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },

    computed: {
      nameValidator() {
        return this.name.length > 1 ? true : 'Name is too short. (Atleast 2 symbols)';
      },

      emailValidator() {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.email) || 'Invalid e-mail.';
      },

      passwordValidator() {
        return this.password.length > 4 ? true : 'Password is too short. (Atleast 5 symbols)';
      },

      comparePasswords() {
        return this.password === this.confirmPassword ? true : 'Passwords don\'t match';
      },

      formCompleted() {
        const emailCompleted = this.emailValidator === true;
        const passwordCompleted = this.passwordValidator === true && this.comparePasswords === true;

        return emailCompleted && passwordCompleted;
      },

      username() {
        return this.$store.getters['user/name'];
      },
    },

    watch: {
      username() {
        this.$router.push('/login');
      },
    },

    methods: {
      join() {
        this.$store.dispatch('user/create', {
          name: this.name,
          email: this.email,
          password: this.password,
        });
      },
    },
  };
</script>

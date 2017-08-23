<template>
    <v-card tile>
      <v-card-text>
        <v-container>
          <form>
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
          </form>
        </v-container>
      </v-card-text>
      <v-card-actions class="secondary">
        <v-layout>
          <v-flex class="text-sm-right">
            <v-btn :disabled="!formCompleted" class="primary">Enter</v-btn>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },

    computed: {
      emailValidator() {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.email) || 'Invalid e-mail.';
      },

      passwordValidator() {
        return this.password.length > 4 ? true : 'Password is too short. (Atleast 5 symbols)';
      },

      formCompleted() {
        const emailCompleted = this.emailValidator === true;
        const passwordCompleted = this.passwordValidator === true;

        return emailCompleted && passwordCompleted;
      },
    },
  };
</script>

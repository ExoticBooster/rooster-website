<template>
  <v-layout justify-center fill-height>
    <v-flex xs10 sm8 md4 class="mt-5">
      <v-card class="elevation-12">

        <v-card-title>
          <h1>Login</h1>
        </v-card-title>

        <v-layout justify-center>
          <v-flex xs10>
            <v-alert :value="!!loginErrorMessage" color='error' outline xs>
              {{ loginErrorMessage }}
            </v-alert>
          </v-flex>
        </v-layout>

        <v-progress-circular v-if="authPending" :width="5" color="primary" indeterminate />
        <v-card-text v-else>
          <v-form>
            <v-text-field
              prepend-icon="person"
              name="login"
              label="Login"
              type="text"
              v-model="email" />

            <v-text-field
              prepend-icon="lock"
              name="password"
              label="Password"
              id="password"
              type="password"
              v-model="password"
              required
              autocomplete="current-password" />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch('login', { email: this.email, password: this.password });
    },
  },
  computed: {
    ...mapState([
      'authPending',
      'user',
      'loginErrorMessage',
    ]),
  },
  watch: {
    user(user) {
      // Send authenticated users to the protected area
      if (user) {
        this.$router.push({ name: 'admin' });
      }
    },
  },
};
</script>

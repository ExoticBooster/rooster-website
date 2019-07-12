<template>
  <v-layout justify-center fill-height>
    <v-flex xs10 sm10>
      <v-card class="mt-5 elevation-9">
        <v-card-title>
          <h2>Kontakt</h2>
        </v-card-title>
        
        <v-text-field>
          <v-form>
          </v-form>
        </v-text-field>
      </v-card>
    </v-flex>
  </v-layout>
</template>

/*  <v-form>
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
          </v-form> */

<script>
export default {
  name: 'TourBooking',
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    book() {
      // TODO
    },
  },
};
</script>

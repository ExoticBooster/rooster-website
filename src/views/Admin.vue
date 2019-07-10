<template>
  <v-layout justify-center fill-height>
    <v-flex xs10 sm8 md4 class="mt-5">
      <v-card class="elevation-12">
        
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>

        <v-layout justify-center>  
          <v-flex xs10>
            <v-alert :value="errorMessage" color='error' outline xs>
              {{errorMessage}}
            </v-alert>
          </v-flex>
        </v-layout>
          
        <v-card-text>
          <v-form>
            <v-text-field
            prepend-icon="person"
            name="login"
            label="Login"
            type="text"
            v-model="email">
            </v-text-field>
            
            <v-text-field 
            prepend-icon="lock"
            name="password"
            label="Password"
            id="password"
            type="password"
            v-model="password"
            required
            autocomplete="current-password">
            </v-text-field>
          
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="signIn">Login</v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data(){
    return {
      email: '',
      password: '',
      errorMessage: 'Falsches Passwort!',
    }
  },
  methods:{
    signIn(){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(){
        this.$router.push('/admin')
      })
      .catch(function (error){
        errorMessage = error.message;
      })
    }
  }
}
</script>
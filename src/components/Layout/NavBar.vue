<template>
  <v-container
  fluid
  >
  <v-card
    class="mx-auto"
    max-width="448"
  >
    <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
        elevation="10"
      >
        <v-app-bar-title>NoteLab</v-app-bar-title> 
          <div class="link" >
            <v-btn
              v-if="storeAuth.user.id"
              @click="storeAuth.signoutUser"
              class="bg-blue-darken-4"
              to="/auth"
              variant="plain"
            >
            Log Out {{ storeAuth.user.email }}</v-btn> |
            <v-btn
              class="bg-blue-darken-4"
              to="/"
              variant="plain"
            >
            Notes</v-btn> | 
            <v-btn
              class="bg-blue-darken-4"
              to="/stats"
              variant="plain"
            >Stats</v-btn>
          </div>       
      </v-app-bar>
    </v-layout>
  </v-card>
</v-container>
</template>
<script setup>
// imports
import { useStoreAuth } from '@/stores/storeAuth';
// store
const storeAuth = useStoreAuth()


</script>

<style scoped>
.link > *{
  text-decoration: none;
  color:yellowgreen;
  margin: 10px;
  text-transform: lowercase;
}


</style>
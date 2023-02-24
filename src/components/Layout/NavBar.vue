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
              variant="plain"
              class="bg-blue-darken-4"
              @click="storeAuth.signoutUser"
            >Log Out</v-btn> |
            <v-btn
              to="/"
              class="bg-blue-darken-4"
              variant="plain"
            >Notes</v-btn> | 
            <v-btn
              to="/stats"
              variant="plain"
              class="bg-blue-darken-4"
            >Stats</v-btn>
          </div>       
      </v-app-bar>
    </v-layout>
  </v-card>
</v-container>
</template>
<script setup>
import { useStoreAuth } from '@/stores/storeAuth';
const storeAuth = useStoreAuth()


</script>
<style scoped>
.link > *{
  text-decoration: none;
  color:yellowgreen;
  margin: 10px
}


</style>
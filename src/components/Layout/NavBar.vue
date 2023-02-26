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
        elevation="5"
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
<v-app class="bg-blue-lighten-3">
  <v-container class="my-15">
    <RouterView />
    <FooterBar/>
  </v-container>
</v-app>
</template>
<script setup>
// imports
import { useStoreAuth } from '@/stores/storeAuth'
import FooterBar from '@/components/Layout/FooterBar.vue'
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
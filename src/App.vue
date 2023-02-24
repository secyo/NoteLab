<template>

    <NavBar />
  
  <v-container class="mt-15">
    <RouterView />
  </v-container>
</template>

<script setup>
  import NavBar from '@/components/Layout/NavBar.vue'
  import { onMounted } from 'vue'
import { useStoreAuth } from './stores/storeAuth';

const storeAuth = useStoreAuth()

onMounted(() => {
  storeAuth.init()
})
</script>

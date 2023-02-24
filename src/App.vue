<template>

    <NavBar />
  
  <v-container class="mt-15">
    <RouterView />
  </v-container>
</template>

<script setup>
  import NavBar from '@/components/Layout/NavBar.vue'
  import { useStoreNotes } from './stores/storeNotes'
  import { onMounted } from 'vue'

const storeNotes = useStoreNotes()

onMounted(() => {
  storeNotes.getNotes()
})
</script>

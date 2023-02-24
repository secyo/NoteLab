<template>
    <AddEditNote
    v-model="noteContent"
  ref="addEditNoteRef"
  bgColor="green"
  placeholder="Edit note"
  label="Edit Note"
  >
  <template #buttons>
    <v-btn
        class="float-right"
        @click="$router.push('/')"
      >Cancel</v-btn>
    <v-btn
        id="myBtn"
        class="float-right"
        :disabled="!noteContent"
        @click="saveNoteHandle"
      >Save Note</v-btn>
  </template>
  </AddEditNote>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useRoute,useRouter} from 'vue-router';
/*
stores
*/
const storeNotes = useStoreNotes()
const route = useRoute()
const router = useRouter()
/*
  note
*/

const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)
const saveNoteHandle = () => {
  storeNotes.saveNoteContent(route.params.id, noteContent)
  router.push('/')
}

</script>
<template>
  <AddEditNote
    v-model="noteContent"
    bgColor="green"
    label="Edit Note"
    placeholder="Edit note"
    ref="addEditNoteRef"
  >
    <template #buttons>
      <v-btn
        @click="$router.push('/')"
        class="float-right"
      >Cancel</v-btn>
      <v-btn
        :disabled="!noteContent"
        @click="saveNoteHandle"
        id="myBtn"
        class="float-right"
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
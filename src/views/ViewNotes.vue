<template>
  <v-template>
    <AddEditNote
    v-model="newNote"
    placeholder="Add a new note..."
    ref="addEditNoteRef"
    >
      <template #buttons>
        <v-btn
        :disabled="!newNote"
        @click="addNote"
        id="myBtn"
        class="float-right"
        >Add  Note...</v-btn>
      </template>
    </AddEditNote> 
  </v-template>


  <v-progress-linear
    v-if="!storeNotes.notesLoaded"
    color="teal"
    indeterminate
  ></v-progress-linear>

  <v-template
  v-if="storeNotes.notesLoaded">
    <v-row
      class="flex-wrap "
    >
      <v-col
        v-for="note in storeNotes.notes"
        class="flex-grow-0 flex-shrink-0"
        cols="4"
        style="min-width: 100px;"
      >
        <Note
          :key="note.id"
          :note="note"
        />
      </v-col>
    </v-row>
  </v-template>
</template>
<script setup>
/*
  imports
*/
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {useWatchCharacters} from '@/use/useWatchCharacters'

import { useStoreNotes } from '@/stores/storeNotes';
/*
  store
*/
  const storeNotes = useStoreNotes()
/*
  notes
*/

const addEditNoteRef = ref(null)
const newNote = ref('')
useWatchCharacters(newNote)
/*
  addNote function
*/
  const addNote = () =>{
    storeNotes.addNote(newNote.value)
    newNote.value= ''
    document.getElementById('myInput').focus()
  }


</script>
<template>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            STATS
          </th>
          <th class="text-left">
            COUNT
        </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{storeNotes.totalNotesCount}}</td>
        </tr>
        <tr>
          <td>Total number of characters</td>
          <td>{{storeNotes.totalCharactersCount}}</td>
        </tr>
        <tr>
          <td><input
    v-model="notelab"
    id="myInput"
    v-autofocus
    placeholder = "do you like notelab?"
    ></td>
          
        </tr>
      </tbody>
      
    </v-table>
    
   
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus} from '@/directives/vAutofocus'
import {useWatchCharacters} from '@/use/useWatchCharacters'

/*
store
*/
const storeNotes = useStoreNotes()
/*
notelab comment 
*/

const notelab = ref('')
useWatchCharacters(notelab)

</script>
  
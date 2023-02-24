<template>
    <v-card
      class="mb-10 "
      variant="tonal"
    ><v-card-text
     >
          {{ characterLength > 1000 ? shortenedtext : note.content }}
          
          <!-- <v-sheet class="d-flex mb-6 bg-surface-variant">
      <v-sheet class="ma-2 pa-2 me-auto f">{{ characterLength > 1000 ? shortenedtext : note.content }}</v-sheet>
      <v-sheet class="ma-2 pa-2">Date created:{{ dateFormatted }}</v-sheet>
    </v-sheet> -->
    </v-card-text>
    
    
    <v-row >
    <v-col>
        <v-card-actions class="ml-2">
        <div class=" float-right ">
        <small> {{characterLength }} character{{characterLength > 1 ? 's' : ''}} <small class="justify-left">Date created:{{ dateFormatted }}</small></small>
    </div></v-card-actions></v-col>
        
    

    <v-card-actions class="d-flex flex-row-reverse">
    
    <v-btn @click="modals.deleteNote = true" class="mr-4">Delete</v-btn>
    <RouterLink 
    :to="`/editNote/${note.id}`" 
    style="text-decoration: none; color: inherit;"><v-btn>Edit</v-btn></RouterLink>
    </v-card-actions></v-row>
    
    </v-card>
    <ModalDeleteNote
    v-if="modals.deleteNote"
    v-model="modals.deleteNote"
    :id="`${note.id}`"></ModalDeleteNote>
</template>
<script setup>
/*
    imports
*/
import { useDateFormat } from '@vueuse/core';
import { computed, reactive } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { RouterLink } from 'vue-router';
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
  
/*
    computed
*/
const dateFormatted = computed(() => {
    let date = new Date(parseInt(props.note.date))
    let formattedDate = useDateFormat(date, 'MM-DD-YY @HH:mm')
    return formattedDate.value
})
const shortenedtext = computed(() => {
    return props.note.content.slice(0,1000) + ' ...'
})
const characterLength = computed(() => {
    return props.note.content.length
})

/*
    stores
*/ 
    const storeNotes = useStoreNotes()
/*
    props
*/
const props = defineProps({
    note:{
        type: Object,
        required: false,

    }
})
/* 
    handle delete clciked
*/

 /*
  modals
  */
const modals = reactive({
    deleteNote: false
})

</script>
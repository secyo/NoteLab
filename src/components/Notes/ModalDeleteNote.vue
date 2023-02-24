<template>
  <v-row justify="center">
    <v-dialog
      v-model="props.modelValue"
      width="auto"
      persistent
    >
      
      <v-card
        ref="modalCardRef"
      >
        <v-card-title class="text-h5">
          Delete Note
        </v-card-title>
        <v-card-text>Are you sure?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="closeModal"
            color="green-darken-1"
            variant="text"
          >
            Cancel
          </v-btn>
          <v-btn
            @click="storeNotes.deleteNote(props.id)"
            color="red-darken-1"
            variant="text"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
/*
imports
*/
import { onClickOutside } from '@vueuse/core'
import { ref,onMounted,onUnmounted } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
/*
    stores
*/ 
    const storeNotes = useStoreNotes()
/*
emits
*/
const emit = defineEmits(['update:modelValue'])
/*
props
*/
const props = defineProps({
    modelValue : {
        type: Boolean,
        default: false
    },
    id:{
        type: String,
        required: true
    }
})
/*
  handle close clicked
*/
const closeModal = () => {
    emit('update:modelValue',false)
}
/*
refs
*/
const modalCardRef = ref(null)
/*
on clik outside
*/
onClickOutside(modalCardRef,closeModal)
/*
keyboard control for esc
*/
const handleKeyboard = e => {
        if(e.key  === 'Escape') closeModal()
}
onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
})
onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
})

</script>
<template>
    <v-card :class="`bg-${props.bgColor}-darken-1 pa-4 mb-10`">
      <v-textarea
        v-model="props.modelValue"
        v-autofocus
        v-keyenter
        :label="`${props.label}`"
        :placeholder="`${props.placeholder}`"
        @input="$emit('update:modelValue',$event.target.value)"
        id="myInput"
        bg-color="#1867C0"
        ref="textAreaRef"
        variant="solo"
      />
        <v-row class="d-flex flex-row-reverse">
          <v-card-actions >
            <slot name="buttons"/>
          </v-card-actions>
        </v-row>  
    </v-card>
</template>

<script setup>
/*
  imports
*/
import { defineProps,ref } from 'vue';
import { vKeyenter} from '@/directives/vKeyenter'
import { vAutofocus} from '@/directives/vAutofocus'

/*
  props
*/

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    bgColor: {
        type: String,
        default: 'blue'
    },
    placeholder: {
        type: String,
        default: 'Type Something...'
    },
    label: {
        type: String,
        default: 'My note'
    }
})

/*
  emits
*/
const emit = defineEmits(['update:modelValue'])

/*
  focus text area 
*/
const textAreaRef = ref(null)

const focusTextarea = () => {
    textAreaRef.value.focus()
}
/*
  exposing function for parent compenent to call
*/
defineExpose({
    focusTextarea
})

</script>
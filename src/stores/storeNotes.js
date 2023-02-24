import { defineStore} from 'pinia'
import { db } from '../js/firebase'
import { collection, doc, 
  query, orderBy, limit, 
  onSnapshot, deleteDoc, 
  updateDoc, addDoc } from 'firebase/firestore';
const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date','desc'));

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [
            // {
            //     id: 'id1',
            //     content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis fugit velit eveniet deserunt id animi perferendis magni. Animi cupiditate nemo ab est necessitatibus sunt sapiente porro esse debitis, eum in? '
            // },
            // {
            //   id: 'id2',
            //   content:'Short text. '
            // }
        ],
        notesLoaded: false,
    }
  },
  actions: {
    async getNotes() {
      this.notesLoaded = false
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = []
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            date: doc.data().date,
            content: doc.data().content
          }
          notes.push(note)
        })

        this.notesLoaded = true
        this.notes=notes

        
      })
    },
    async addNote(newNoteContent) {
      let date = new Date().getTime().toString()
      // let note = {
      //   id,
      //   content: newNoteContent,
      // }
      // this.notes.unshift(note)
      await addDoc(collection(db, "notes"), {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(idToDelete) {
        // let noteToRemove = this.notes.find(el => el.id === idToDelete)
        // let indexToRemove = this.notes.indexOf(noteToRemove)
        // this.notes.splice(indexToRemove,1)
        await deleteDoc(doc(db, "notes", idToDelete));
    },
    getNoteContent(idToEdit) {
      let note = this.notes.find(el => el.id === idToEdit)
      return note.content
    },
    async saveNoteContent(idToSave,textContent){
      // let noteToSave = this.notes.find(el => el.id === idToSave)
      //   let indexToSave = this.notes.indexOf(noteToSave)
      //   this.notes[indexToSave].content = textContent.value
        await updateDoc(doc(db, "notes", idToSave), {
          content: textContent.value
        });

    }
  },
  getters: {
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount : (state) => {
      let a = 0
      for(const note of state.notes){
          a += note.content.length
      }
      return a
  }
  }
})

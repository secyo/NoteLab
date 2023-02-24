import { defineStore} from 'pinia'
import { db } from '../js/firebase'
import { collection, doc, 
  query, orderBy, limit, 
  onSnapshot, deleteDoc, 
  updateDoc, addDoc 
} from 'firebase/firestore'
import { useStoreAuth } from '@/stores/storeAuth'

let notesCollectionRef
let notesCollectionQuery
let getNotesSnapshot = null

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes: [
          // note1:{
          //   id: qmejqgyegquheşqw,
          //   date: 2301293012903,
          //   content: "Hello this is a note"
          // }
        ],
        notesLoaded: false,
    }
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth()
      console.log(storeAuth.user.id)
      notesCollectionRef = collection(db, 'users', storeAuth.user.id ,'notes')
      notesCollectionQuery = query(notesCollectionRef, orderBy('date','desc'));
      this.getNotes()
    },
    async getNotes() {
      this.notesLoaded = false
      if (getNotesSnapshot) getNotesSnapshot() //unsubscribe form snapshot listener
      getNotesSnapshot = onSnapshot(notesCollectionQuery, (querySnapshot) => {
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
      }, error => {
        console.log('error:', error.message)
      })
    },
    async addNote(newNoteContent) {
      let date = new Date().getTime().toString()
      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(idToDelete) {
        // let noteToRemove = this.notes.find(el => el.id === idToDelete)
        // let indexToRemove = this.notes.indexOf(noteToRemove)
        // this.notes.splice(indexToRemove,1)
        await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    getNoteContent(idToEdit) {
      let note = this.notes.find(el => el.id === idToEdit)
      return note.content
    },
    async saveNoteContent(idToSave,textContent){
      // let noteToSave = this.notes.find(el => el.id === idToSave)
      //   let indexToSave = this.notes.indexOf(noteToSave)
      //   this.notes[indexToSave].content = textContent.value
        await updateDoc(doc(notesCollectionRef, idToSave), {
          content: textContent.value
        });

    },
    clearNotes() {
      this.notes = []
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

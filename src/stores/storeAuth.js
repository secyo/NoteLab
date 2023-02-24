import { defineStore} from 'pinia'
import { auth } from '../js/firebase'
import { useRouter} from 'vue-router'
import {  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { useStoreNotes } from '@/stores/storeNotes'


export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
      user: {
      }
    }
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id=user.uid
          this.user.email=user.email
          this.router.push('/')
          storeNotes.init()
        } else {
          this.user = {}
          this.router.replace('/auth')
          storeNotes.clearNotes()
        }
      });
    },
    createUser(credential){
      createUserWithEmailAndPassword(auth, credential.email,credential.password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log('user:', user)
      }).catch((error) => {
        // console.log('error:', error.message)

      })
    },
    signoutUser(){
        signOut(auth).
        then(() => {
          // console.log('signout succesful')
        }).catch((error) => {
          // console.log(error)
        })
    },
    loginUser(credential){
      signInWithEmailAndPassword(auth, credential.email, credential.password)
      .then((userCredential) => {}).catch((error) => {})
    }
  },
})

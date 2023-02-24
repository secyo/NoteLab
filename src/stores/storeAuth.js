import { defineStore} from 'pinia'
import { auth } from '../js/firebase';
import {  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
  ,signOut} from "firebase/auth";



export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
        
    }
  },
  actions: {
    createUser(credential){
      createUserWithEmailAndPassword(auth, credential.email,credential.password).then((userCredential) => {
        const user = userCredential.user;
        console.log('user:', user)
      }).catch((error) => {
        console.log('error', error.message)
        // ..
      })
    },
    signoutUser(){
        console.log('signout',auth)
        signOut(auth).then(() => {}).catch((error) => {});
    },
    loginUser(credential){
      signInWithEmailAndPassword(auth, credential.email, credential.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user)
      })
      .catch((error) => {
        console.log('erorr,', error.message)
      });
    }
  },

})

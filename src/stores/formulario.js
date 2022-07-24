import { defineStore } from 'pinia'
import { db } from '@/firebase.js'
import { collection, addDoc } from 'firebase/firestore'

export const useFormularioStore = defineStore({
  id: 'formulario',
  state: () => ({
    formularioInscripcion: null,
  }),
  getters: {},
  actions: {
    async addToDb(formulario) {
      try {
        const tabla = collection(db, 'inscripciones')
        const data = await addDoc(tabla, formulario)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
  },
  persist: {
    key: 'anmm',
    storage: window.localStorage,
  },
})

import { defineStore } from 'pinia'
import { db } from '@/firebase.js'
import { collection, getDocs } from 'firebase/firestore'

export const useInscripcionStore = defineStore({
  id: 'inscripcion',
  state: () => ({
    inscripciones: [],
  }),
  actions: {
    async getInscripciones() {
      try {
        const data = []

        const tabla = collection(db, 'inscripciones')

        const docs = await getDocs(tabla)

        docs.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          })
        })

        this.inscripciones = data

        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error)
      }
    },
  },
})

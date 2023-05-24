import { collection, collectionGroup, getDocs } from 'firebase/firestore/lite'
import React from 'react'
import { FirebaseDB } from '../firebase/config'

export const loadNotes = async(uid= '') => {
    if(!uid) throw new Error('el UID no existe')

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
    const docs= await getDocs(collectionRef)

    const notes =[];
    docs.forEach(doc => {
        notes.push({id: doc.id, ...doc.data()})
    })

    return notes 



}

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import api from '../lb/axios';
import toast from 'react-hot-toast';




const NoteDetailPage = () => {

const [note,setNote] = useState(null);
const [loading,setLoading] = useState(true);
const [saving,setSaving] = useState(false);

const {id} = useParams()


const navigate = useNavigate()

useEffect(()=>{

const fetchNote = async () => {
  try {
    const res = await api.get(`/notes/${id}`)
    setNote(res.data)
  } catch (error) {
    console.log("Failed to fetch the note.", error)
    toast.error("Failed to fetch the note. ")
  }finally{
    setLoading(false)
  }
}

},[id])


console.log(note)

console.log({id});

  return (
    <div>NoteDetailPage</div>
  )
}

export default NoteDetailPage
import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import Button from './Button';

export default function AddTask() { 
  const [currentNote, setCurrentNote] = useState({title: '', note: ''});
  const [initInput, setInitInput] = useState({title: '', note: ''});
  const dispatch = useDispatch();

  const inputHandler = (event) => {
      setCurrentNote((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value
      }))
      
  }

  const addNoteHandler = () => {
    dispatch({
        type: 'ADD_NOTE',
        payload: currentNote
    })
    setInitInput({title: '', note: ''});
  }

  return (
    <>
    <h1>easy way to manage your tasks</h1>
    <div className='add-task'>
        <input name='title' id='title' type='text' placeholder='enter title' defaultValue={initInput.note} onChange={inputHandler} />
        <input name='note' id='note' type='text' placeholder='enter note' defaultValue={initInput.note} onChange={inputHandler} />
        <Button className='mark-add' name='add' onclick={addNoteHandler} />
    </div>
    </>
  )
}

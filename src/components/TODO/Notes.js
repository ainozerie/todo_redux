import React from 'react'
import { useSelector } from 'react-redux'

import Note from './Note';

export default function Notes() {
  const notes = useSelector((state) => state.notes );

  

  const notesToDisplay = notes.map(note => {
      if (!note.done) {
        return <Note key={note.id} id={note.id} title={note.title} note={note.note} done={note.done} />
      }
  }) // unfinished notes
  const doneNotes = notes.map(note => {
    if (note.done) {
      return <Note key={note.id} id={note.id} title={note.title} note={note.note} done={note.done} />
    }
  }) // finished notes
  for (let i = 0; i < doneNotes.length; i++) {
      notesToDisplay.push(doneNotes[i]);
  } // placing finished notes fter unfinished
  console.log(notesToDisplay)
  return (
    <div className='notes'>
       {notesToDisplay}
    </div>
  )
}

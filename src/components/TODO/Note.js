import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
export default function Note(props) {
    const dispatch = useDispatch();

    const deleteNoteHandler = (id) => {
      dispatch({
          type: 'DELETE_NOTE',
          payload: id
      })
    }
    const finishNoteHandler = (id) => {
        dispatch({
            type: 'FINISH_NOTE',
            payload: id
        })
      }

  return (
    <div className={(props.done) ? 'note doneNote' : 'note undoneNote'}>
        <div className='content'>
            <p>{props.title}:</p>
            <p>{props.note}</p>
        </div>
        <div className='content'>
            {!props.done 
              ? <Button id={props.id} class='mark-done' name='done' onclick={() => finishNoteHandler(props.id)} />
              : <></>}
            <Button id={props.id} class='mark-delete' name='delete' onclick={() => deleteNoteHandler(props.id)} />
        </div>

    </div>
  )
}

import React from 'react'

export default function AddTask() {
  return (
    <div className='add-task'>
        <input id='title' type='text' placeholder='enter title' />
        <input id='note' type='text' placeholder='enter note' />
        <button>add</button>
    </div>
  )
}

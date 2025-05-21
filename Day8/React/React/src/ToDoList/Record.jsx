import React from 'react'
import { RecordList } from './RecordList'
// import { RecordList } from './RecordList'
// import { toDoContext } from '../Contexts/ToDoContent'

export const Record = () => {
  return (
   <>
        <div className=' border mt-3'> </div>
    <div className='mt-3 p-3'>
        <p className='text-xl '>Record Lists !!!</p>
    </div>
    <RecordList/>
   </>
  )
}

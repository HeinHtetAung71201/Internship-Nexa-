import React, { useContext, useState } from 'react'
import { Record } from './Record';
import { toDoContext  } from '../Contexts/ToDoContent';
import { DataPassing } from '../Contexts/ChilToParent';
// import { EditContent } from './EditContent';
export const InputBox = () => {
  // const ToDoInPut= useContext(ToDoContext);
  const [array, setArray]= useState([]);
  const [inputValue,setValue]= useState("");
  const [inputId,setId]= useState(1);

  const saving=()=>{
    // setValue="";
    setId((preId)=>preId+1);
    console.log("Adding id", inputId);
    const trimmedValue= inputValue.trim();
    const newValue={inputId,trimmedValue};
    setArray((prevArr)=>[...prevArr,newValue]);
    // console.log(inputValue,"Value");
    // console.log(inputId,"inputId");
    setValue("");
    console.log("ArrayList : ",array );
  }
  const { editId, edit}= useContext(DataPassing);
  console.log(editId,"sentId");
  console.log(edit,"sentValue");
 
  return (
    <>
      <div className='flex justify-center mt-3'>
        <input type='text' className='border p-2' value={inputValue} placeholder='Insert Here !!' onChange={(e)=>setValue(e.target.value)}></input>
        <button className='mx-3 p-2 border bg-blue-600' onClick={saving}>Save</button>
    </div>
    <toDoContext.Provider value={{ array, setArray }}>
      <Record/>
      {/* <EditContent/> */}
    </toDoContext.Provider>
    
    
    </>

  )
}

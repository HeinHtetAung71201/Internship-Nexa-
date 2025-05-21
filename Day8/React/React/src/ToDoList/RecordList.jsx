import React, { useContext, useState } from 'react'
import { toDoContext } from '../Contexts/ToDoContent'
import { InputBox } from './InputBox';
import { DataPassing } from '../Contexts/ChilToParent';
// import { EditContent } from './EditContent'; 

export const RecordList = () => {
    const [isCheck,setCheck]= useState(false);
    const [edit,setEdit]= useState("");
    const [editId,setEditId]= useState("");
    const handleCheck=(id)=>{
        setCheck((prev) => ({
            ...prev,
            [id]: !prev[id],
          }));
    }

    const { array, setArray }= useContext(toDoContext);
    console.log("Array Used", array);
    const EditContent=(id,value)=>{
        console.log("Edit :", id);
        console.log("Value",value);
        // {<InputBox sentValue={value}/>}
        setEditId(id);
        setEdit(value);
        

        // const newInput= prompt("Edit the text :");
        // console.log(array);
        // console.log(newInput);
        // if(newInput?.trim()){
        // console.log(newInput);
        // const updated= {trimmedValue: newInput};
        //     setArray((preArr)=>
        //         preArr.map((item)=>
        //             item.inputId === id ? {...item,...updated} : item  
        //         )
        //     )
        // }
    }
    const DelContent=(id)=>{
        const con= confirm("Do you want to delete item? ");
        if(con){
         setArray((prevArray) => prevArray.filter((item) => item.inputId !== id));
        }

     }
  return (
   <>
    <div className='p-3 '>
       <div className="h-[400px] my-element">
       <ul>
        {
            array.length > 0 ? (
                array.map((items)=>{
                    // console.log(items.inputId,"Content id");
                    // console.log(items.trimmedValue,"Contnet Value");
                    return(
                        <li className='mt-4' key={items.inputId} >  
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <input type="checkbox" name=""  checked={!!isCheck[items.inputId]} className='me-3' onChange={()=>handleCheck(items.inputId)}/>
                            <p className={isCheck[items.inputId] ? 'line-through text-gray-500' : ''} >{items.trimmedValue}</p>
                        </div>
                    <div >
                        <button className='me-5 p-1' onClick={() => EditContent(items.inputId,items.trimmedValue)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                        <button className=' p-1 ' onClick={() => DelContent(items.inputId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </button>
                    </div>
                </div>
            </li>
                    );
                })
            ) : (
                <li className="text-gray-500 text-center">No recorded list</li>
            )
        }
        
       
       </ul>
       </div>
    </div>
    <DataPassing.Provider value={{editId,edit}}>
        <InputBox/>
    </DataPassing.Provider>


    {/* 
        router
        tailwind
    */}
    
   </>
    
  )
}

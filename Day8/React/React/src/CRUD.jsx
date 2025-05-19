import React, { useState } from 'react'

function CRUD() {
    const [arrayList, setArray]= useState([]);
    const [inputValue,setInputValue]= useState("");
    const [inputId, setInputId]= useState("");
    
    const addArray = () => {
        if (inputId.trim() && inputValue.trim()) {
            const isDuplicate= arrayList.some(item => item.id === inputId.trim());
            if(isDuplicate){
                alert("ID already Exit !!!");
                return;
            }
          const newItem = { id: inputId.trim(), value: inputValue.trim() };
          setArray((prevArray) => [...prevArray, newItem]);
          setInputValue(""); // Clear input after adding
          setInputId("");
        }
        // console.log(arrayList);
      };

    const editBtn=(id)=>{
        const value= prompt("Enter new Value :");
        if(value?.trim()){
           console.log(arrayList);
           setArray((preArr)=>
                preArr.map((item)=>
                    item.id === id ? {...item,value : value.trim()} :item
                )
           );
            }
      };

    const delBtn=(id)=>{
       const con= confirm("Do you want to delete item? ");
       if(con){
        setArray((prevArray) => prevArray.filter((item) => item.id !== id));
       }
    }
  return (
   <>
    <div>
        <label htmlFor=""> Id :</label>
        <input type="text" name="" id="" value={inputId} onChange={(e)=>setInputId(e.target.value)}/>
        <label htmlFor="" > Value:</label>
        <input type="text" name="" id="" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        <button onClick={addArray}>Add Array</button>
    </div>
    <div>
          <h2>
            Array List
          </h2>
          <div>
            <ul>
            {arrayList.length > 0 ? (
                arrayList.map((item) => (
                    <li key={item.id} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                        <div className="space-x-2">
                        <span>ID: {item.id} - {item.value}</span>
                            <button onClick={() => editBtn(item.id)} className="px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
                            <button onClick={() => delBtn(item.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                        </div>
                    </li>
                ))
                ) : (
                <li className="text-gray-500">No items in array</li>
                )}
            </ul>
          </div>
    </div>
   </>
  )
}

export default CRUD
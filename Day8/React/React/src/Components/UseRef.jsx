// import React, { useRef, useState } from 'react'

//Accessing DOM Ele

// function UseRef() {
//    const inputRef= useRef(null);

//    function foucsInput(){
//     inputRef.current.focus();
//     inputRef.current.value="Hein Htet Aung";
//     // console.log(inputRef.current.value)
//    };
//    return(<div>
//     <input type="text" ref={inputRef} placeholder='click button to focus' />
//     <button onClick={foucsInput}>Click to focus</button>
//    </div>);
// };

// import React, { useRef, useState } from 'react'
//Storing mutable values withour re-render
// function UseRef() {
//     const renderRef= useRef(0);
//     const [count,setCount]= useState(0); 
//     function RenderCount(){
//       setCount(count+1);
//       renderRef.current+=1;
//     }
  
//   return (
//    <div>
//     <p>Count: {renderRef.current}</p>
//     <p>Render Count: {renderRef.current}</p>
//     <button onClick={RenderCount}>Click to count</button>
//    </div>
//   )
// }

// export default UseRef

//Timer Start Stop
import React, { useRef, useState } from 'react'

function UseRef() {
  const [count,setCount]=useState(0);
  const CountRef= useRef(0);
  
  const StartTimer= ()=>{
    CountRef.current=setInterval(() => {
      console.log("Hey guy");
      setCount((prev)=>prev+1);
    }, 1000);
  }
  const StopTimer =()=>{
    clearInterval(CountRef.current);
  }
  return (
    <div>
      <p>Time: {count}</p>
      <button onClick={StartTimer}> Start </button>
      <button onClick={StopTimer}>End</button>
    </div>
  )
}

export default UseRef
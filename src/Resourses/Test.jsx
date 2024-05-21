import { fontSize } from '@mui/system'
import { useEffect, useState } from 'react'
import React from 'react';

const Test = () => {
    const[count,setCount] = useState(0)

    const[coun,setCoun] = useState("none")



    // const increment=()=>{
    //     setCount(previousCount=>previousCount+1)
    //     setCount(previousCount=>previousCount+1)
    // }
    const increment=()=>{
        setCount(count+1)
        setCount(previousCount=>previousCount+1)

        setCount(previousCount=>previousCount+1)
        setCount(count+1)

    }

    // const decrement=()=>{
    //     setCount(count-1)
    //     setCount(count-1)
    // }
    const decrement=()=>{
        setCount(previousCount=>previousCount-1)
    } 

  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        {/* <span style={screensize}>{windowWidth}</span> */}
    </div>
  )
}

export default Test



// const[windowWidth,setWindowWidth]=useState(window.innerWidth)

//     const handleReside=()=>{
//         setWindowWidth(window.innerWidth)
//     }
//     useEffect(()=>{
//         window.addEventListener('resize',handleReside)
//         return ()=>{
//             handleReside();
//         }
//     },[])

//     const screensize={
//         color:'red',
//         fontSize :'30px'
//     }
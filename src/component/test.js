import { useState } from "react";

const test = () => {
    let [data,setData] = useState('초기값');

    let func= () =>{
        setData("변경")
    }
    const enter = ()=>{
        setData("입장")
    }

    const exit = ()=>{se}
    
    
    return(
        <>
        <h3>state값: {data}</h3>
        <button onClick={func}>값변경하기</button>
        <button onClick={enter}>입장</button>
        <button>퇴장</button>
        </>
    )
}

export default test;
import { useState } from "react";

const StateComponentQ = () => {

    let [count, setCount] = useState(0);

    const up = () =>{
     setCount(count+1);
}

     const down = () => {
          setCount(count-1);
     }

     const x = () => {
          setCount(0);
     }
    return (
   <div> 실습
        <h3>카운트:{count}</h3>
          <button onClick={up}>증가</button>
          <button onClick={down}>감소1</button>
          <button onClick={x}>초기화</button> 
          <hr/>
        <button onClick={() => setCount(count+1)}>증가</button>
        <button onClick={() => setCount(count-1)}>감소</button>
        <button onClick={() => setCount(0)}>초기화</button>
   </div>
)
}

export default StateComponentQ;
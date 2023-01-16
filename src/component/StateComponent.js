import { useState } from "react";


const StateComponent = () => {

    /* 
    state란 컴포넌트에서 변화하는 값을 의미한다.
    state가 변경되면 컴포넌트를 리렌더링 시킨다.
    함수형컴포넌트에서는 useState()를 사용한다.
     */
    // let data = useState('초기값');
    // console.log(data);
    let [data, setData] = useState('초기값');
    console.log(data); //useState매개변수 값
    // console.log(setData); //setData로 값을 바꿔준다.
    
    let func = () => {setData("변경");}
    let enter = () => {setData("입장");}
    let exit = () => {setData("퇴장");}
    
    //state는 여러개 일 수 있다.

    let [color, setColor] = useState('red');
 
    
    return (
        <>
        <h3 style={{'color':color}}>state값 : {data}</h3>   {/* 속성명: 변수 */}
        <button onClick={func}>값변경하기</button>
        <button onClick={enter}>입장</button>
        <button onClick={exit}>퇴장</button>
        <hr/>
        <button onClick={() => setColor("red")}>붉은색</button>
        <button onClick={() => setColor("blue")}>푸른색</button>
        <button onClick={() => setColor("yellow")}>그 사이 3초 그 짧은색</button>
        </>
    )
}
export default StateComponent;
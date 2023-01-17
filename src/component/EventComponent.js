import { useState} from "react";
const EventComponent = () => {

    // //name을 저장할 useState
    // const [name, setName] = useState('')
    
    // //이벤트 함수의 첫번째 매개변수에 이벤트에 대한 정보를 넣어준다.
    // const handleName = (e) => {
    //     setName(e.target.value);
    // }

    // const [topic, setTopic] = useState('');
    // const handelTopic = (e) => {
    //     setTopic(e.target.value)
    // }

        
    // //클릭이벤트
    // const handleClick = () => 
    // {
    //     alert(`${name}님의 주제는 ${topic}입니다`) //state값
    //     setName(''); //인풋데이터 초기화
    //     setTopic(''); //인풋데이터 초기화
    // }

    // //엔터키의 처리
    // const handlePress = (e) => {
    //     // console.log(e)
    //     if(e.keyCode === 13) {
    //         handleClick();
    //     }
    // }

    const [name,setName] = useState('1');

    const handName = (e) => {
        setName(e.target.value);
    }

    const [topic, setTopic] = useState('');
    const handTopic = (e)=>{
        setTopic(e.target.value)
    }
    return(
        <>
        <h3>리액트의 이벤트 핸들링(인풋데이터)</h3>
        <input type="text" onChange={handName}></input>
        <div>체인지된 결과 : {name}</div>
        <br/>
        <input type="text" onChange={handTopic}></input>
        <div>체인지된 결과 : {topic}</div>



{/* 
        <hr/>
        <h3>리액트의 이벤트 핸들링(인풋데이터)</h3>
        <input type ="text" name="name" onChange={handleName} value={name}/>
        <div>체인지된 결과: {name} </div>

        <input type = "text" name="topic" onChange={handelTopic} onKeyUp={handlePress} value={topic} />
        <div>체인지된 결과: {topic}</div>
    
        <button type="button" onClick={handleClick}>클릭</button>
         */}
        </>

    )
}

export default EventComponent;
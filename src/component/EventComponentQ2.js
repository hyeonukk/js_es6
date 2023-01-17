import { useState } from "react";

const EventComponentQ2 = () => {

    const [data, setData] = useState('');
    
    const handleName = (e) => {
        setData(e.target.value);
    }

    const [result, resultValue] = useState('');
    const resultClick = (e) => {
        setData('');
        resultValue(data);
    }   

  

   
    return (
    <>
  








    <hr/>
    <h3>인풋데이터 핸들링(실습)</h3>
    <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리<br/>
    힌트는? 아마도 state는 두개가 필요할듯?
    </p>
    <input type="text" name="name" onChange={handleName} value={data}/>
    <h3>결과</h3>
    <div>{result}</div>
    <button type="button" onClick={resultClick}>추가하기</button>
    
    </>

    )
}

export default EventComponentQ2;
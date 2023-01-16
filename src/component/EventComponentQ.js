import { useState } from "react";


const EventComponentQ  = () => {

    const [name, setName] = useState('');

    const sel = (e) => {
        setName(e.target.value);
    }

    return (
        <>
        <h3>셀렉트 태그 핸들링(실습)</h3>
        <p>셀렉트 태그가 체인이 될때 선택한 결과를 아래에 출력</p>
        <select onChange={sel}>
            <option>피자</option>
            <option>햄버거</option>
            <option>치킨</option>
        </select>
        
        <h3>선택한결과</h3>
        <p>{name}</p>
        
        </>


    )
}

export default EventComponentQ;
import { useState } from "react";

const IterationComponent2 = () => {

    /* 
    1. 반복할 데이터(state로)관리
     */

    const arr = [
    {id:1, topic:'hello'},
    {id:2, topic:'bye'},
    {id:3, topic:'see you'},
    ];

    const [list,setList] = useState(arr);
   
    //2. map함수를 이용해서 li태그로 생성
    const newList =  list.map((item,index) =>
        <li key ={item.id} onDoubleClick={()=> { handleRemove(item.id)
        }}>
             {item.topic}
        </li>
        )

    //const newList = list.map(item => <li key ={item.id}>{item.topic}</li>
        //console.log(item); //list값 출력

    //3. 인풋데이터 관리
        const [data, setData] = useState('');
        
        const handleChange = (e) => {
            setData(e.target.value);
    }

    //4. 추가하기 버튼 클릭시 input의 값을 list의 마지막에 추가
        const handleClick = () => {
            let obj = {id: list[list.length-1].id+1, topic : data}
            //list.push(obj) // state직접 변경하면 안됨 오류
          let newArr = list.concat(obj); //리스트에 obj를 합쳐진 새로운 리스트 
          setList(newArr); //state변경
          setData('');//input값 초기화
        }
    //5. 삭제기능
        // 일반함수 function handleRemove() {
        //     console.log(1);
        // }
        //1. 화살표 함수는 익명함수 라서 호이스팅이 불가능하다.
        //2. 이벤트안에서 함수를 호출로 연결하는 방법  -> onClick = { () => 함수호출() }
        const handleRemove = (a) => {
            console.log(a); //삭제하기 위한 키 
            //filter를 이용해서 삭제
            // [1,2,3,4,5].filter( (item) => item !=3 )

            const newList = list.filter( item => item.id !==a);
            setList(newList);
        }

    return (
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data}/>
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IterationComponent2;
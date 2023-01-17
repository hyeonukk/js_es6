
/* 
이미지를 가져오는 방법
1. 외부 서버에서 경로를 참조받는 방법(가장일반적인 방법)

2. src폴더 밑에 img파일 참조
// import img1 from '../img/img1.png'; //이미지가 여러개인경우 불편하다.

3. public폴더 밑에 넣는경우 이미지를 바로 참조가능 (추천)
// import 할 필요없이 바로 사용 가능하다.
*/

import { useState } from "react";


const IterationComponentQ = () => {
    
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]
   
    //1. state로 arr를 관리
    const [list, setList] = useState(arr);
   
    
    //3. 클릭시에 화면에 그려질 내용을 state로 관리 
    const [content, setContent] = useState({src:'img/img1.png'});
    const handleContent = (e) => {
        setContent({src:e.target.src});
    }
     
    //2. 반복처리 

    const newList = list.map((item,index) =>
    //  console.log(list)
    <div key={item.title}>
        <img src={item.src} onClick= {handleContent}/>
        <p>제목: {item.title}</p>
        <p>가격: {item.price}</p>
    </div>
    );


    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100"/>
             <img src= {img1} alt="제목" width="100"/> 
            <img src="/img/img1.png" alt="제목" width="100"/>*/} 

            <div>
                <img src={content.src} width="200"/>
            </div>

        <div style={{display: "flex", justifyContent: "space-around"}} >
            {/* 반복할 요소의 모형 */}
                
               {newList}
            
        </div>    
        </>
    )
}

export default IterationComponentQ;
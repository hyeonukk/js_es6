import { Fragment } from "react";

/* p.87
컴포넌트 선언방법은 크게 2가지(함수형, 클래스)

모듈 내보내기 export default
모듈 가져오기 import~from 경로
props는 p.96쪽에 나온다
1. 상위 컴포넌트에서 하위 컴포넌트로 전달하는 매개변수
2. 객체형태로 전달되기 때뭉네 {}로 값을 받는다.
3. props는 읽기전용입니다.(값은 부모에서 바꿔서 전달한다.)
*/
const MyComponet = (/* props */{name,age,email,addr}) => { //매개변수에 객체를 바로 넣어서 사용해도 된다.
    //1st
    // console.log(props)
    // const a = props.name;
    // const b = props.age;
    // const c = props.email;
    
    //2nd
    //const {name, age, email} = props;

    return (
        <Fragment>
        <div>나의 첫번째 컴포넌트</div>
        <div>props값: {name}</div>
        <div>props값: {age}</div>
        <div>props값: {email}</div>
        <div>default props값:{addr}</div>
        </Fragment>
    )
}

/* props의 기본값 지정하기 컴포넌트명.defaultProps = {}  */
MyComponet.defaultProps = { 
    name : "이름없음",
    age : 0,
    // email : "지정안됨",
    addr : "서울시" // addr은 전달되지 않지만 기본값
}

/* props의 타입검증 컴포넌트명.propTypes={} */
MyComponet.propTypes = {
    name: PropTypes.string,
    age : PropTypes.number,
    email : PropTypes.string.isRequired // 문자열 타입, 반드시 전달
 }

export default MyComponet;
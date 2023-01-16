import { Component } from "react";


class MyComponent3 extends Component {

    //state는 생성자 안에서 초기화를 합니다.
    //클래스형의 state 접근은 this.state를 이용해서 접근한다.
    //클래스형의 state는 반드시 객체 모형이여야 한다. 
    //클래스에서 생성자를 작성할 때는 반드시 props를 받고, super(props)를 통해 component에 연결해야 한다.
    
    constructor(props) {
        super(props); 
        this.state  = {
            a : 1,
            b : props.name //부모로부터 전달받은 name
        }
    }


    
    //클래스형 컴포넌트 render함수 안에서 return문을 작성
    render() {
        let {name} = this.props; //props
        console.log(name);
        return (
            <>
            <div>나의 클래스형 컴포넌트</div>
            state값 : {this.state.a} <br/>
            state값 : {this.state.b}
            </>
        )
    }

}

export default MyComponent3;
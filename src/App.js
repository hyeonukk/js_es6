import { Fragment } from "react";
import MyComponet from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";
const App = () => {
    return (
        <Fragment>
        <h3>나의 App.JS</h3>
        <MyComponet name={"홍길동"} age={20}/>
        <MyComponent2/>
        <MyComponent3/>
        </Fragment>

    )
}
export default App; //내보내기
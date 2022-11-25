import React, {Component} from "react";
const internalcss = {
    color: "blue"
}
const internalcss2 = {
    color: "darkBlue"
}

const FuncComponent = () =>{
    return(
        <div className='Box1'>
            <h1>This is created using Functional Component</h1>
            <p>This is done using external css</p>
            <p style={internalcss}>This is done using internal css</p>
        </div>
    )
}
export default FuncComponent;


export class ClassComponent extends Component{
    render(){
        return(
            <div className='Box2'>
                <h1>This is created using Class Component</h1>
                <p>This is done using external css</p>
                <p style={internalcss2}>This is done using internal css</p>
            </div>
        )
    }
}
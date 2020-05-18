import React, {Component} from 'react';

function Children(props){
    return <div className={'thuan' + props.color}>
        {props.children}
    </div>
}
function DrapChildren(props){
    return <Children color="blue" >
        <h1>{props.title}</h1>
        <p>{props.mess}</p>
        {props.children}
    </Children>
}

class Contaiment extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
        this.formSubmit   = this.formSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }
    formSubmit(){
        alert( "thuan" + this.state.value)
        // this.setState({
        //     value: ""
        // })
    }

    render(){
        return(
            <DrapChildren title="Login" mess="Vui long dang nhap">
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.formSubmit}>Gui</button>
            </DrapChildren>
        );
    }
}

export default Contaiment;

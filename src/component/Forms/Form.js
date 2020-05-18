import React, {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
        this.formSubmit   = this.formSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    formSubmit(event){
        alert(this.state.value);
        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }

    render(){
        return(
            <div className="Form">
                <form onSubmit={this.formSubmit}>
                    <label>Name</label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" value="submit"></input>
                </form>
                <p>{this.state.value}</p>
            </div>
        );
    }
}


export default Form;
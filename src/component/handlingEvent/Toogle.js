import React, {Component} from 'react';

class Toogle extends Component{
    constructor (props){
        super(props);
        this.state = {
            isToggle: true,
        }
        // this.testToggle = this.testToggle.bind(this);
    }
    testToggle(){
        console.log(1);
        this.setState(() =>({
            isToggle: !this.state.isToggle,
        }));
    }
    render(){
        return(
            <div className="Toogle">
                <p onClick={() =>{ this.testToggle() }}>{this.state.isToggle ? 'on' : 'off'}</p>
            </div>
        );
    }
}

export default Toogle;
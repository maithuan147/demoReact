import React, {Component} from 'react';

class Click extends Component{

    constructor(props){
        super(props);
        // console.log(this.testClick);
        this.testClick = this.testClick.bind(this);
    }

    testClick(e) {
        e.preventDefault();
        alert(1);
    }

    render(){
        return(
            <div className="Click">
                <a href="thuan" onClick={this.testClick}>Thuan</a>
            </div>
        );
    }
}

export default Click;
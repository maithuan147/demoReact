import React, {Component} from 'react';
import classNames from 'classnames';
import './Traff.css';

class Traff extends Component{
    constructor(){
        super();
        this.state = {
            color: 'blue',
            delay: 1000,
            options: [
                {
                    color: 'blue',
                    delay: 100
                },
                {
                    color: 'yellow',
                    delay: 100000
                },
                {
                    color: 'red',
                    delay: 60000
                }
            ]
        };
    } 
    
    componentDidMount() {
        setInterval(() => {
            this.setState ({
                color: this.getNextColor(this.state.color),
                delay: this.getDelay(this.state.color)
            }); 
        }, this.state.delay);
        console.log(this.state.delay);
    };


    getDelay(color){
        switch (color) {
            case 'blue':
                return this.state.options[0].delay;
            case 'yellow':
                return this.state.options[1].delay;
            case 'red':
                return this.state.options[2].delay;
            default:
                return this.state.options[0].delay;
        }
    }
    getNextColor(color){
        switch (color) {
            case 'blue':
                return 'yellow';
            case 'yellow':
                return 'red';
            default:
                return 'blue';
        }
    }
    render(){
        return(
            <div className="Traff">
                <div className={classNames('circle','blue', { 
                    active:this.state.color === 'blue' 
                })}></div>
                <div className={classNames('circle','yellow', { 
                    active:this.state.color === 'yellow' 
                })}></div>
                <div className={classNames('circle','red', { 
                    active:this.state.color === 'red' 
                })}></div>
            </div>
        );
    }
}

export default Traff;
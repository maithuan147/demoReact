import React, {Component} from 'react';

class Rendering extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    login(){
        this.setState({
            isLoggedIn: true
        })
    }
    logout(){
        this.setState({
            isLoggedIn: false
        })
    }

    render(){
        return(
            <div className="Rendering">
                <Check/>
            </div>
        );
    }
}

class Check extends Rendering{
    render(){
        return (
            this.state.isLoggedIn ? <LogoutButton onClick={() => {this.logout()}} /> : <LoginButton onClick={() => {this.login()}} />
        );
    }
}

class LogoutButton extends Rendering{
    render(){
        return (
        <button onClick={this.props.onClick}>
            Logout
        </button>
        );
    }
}

class LoginButton extends Rendering{
    render(){
        return (
        <button onClick={this.props.onClick}>
            Login
        </button>
        );
    }
}


export default Rendering;
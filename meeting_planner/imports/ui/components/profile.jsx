import React from 'react';
import GoogleLogin from 'react-google-login';

export class Profile extends React.Component{
    constructor(props){
        super(props);
        this.saveUsername = this.saveUsername.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.state = {username: ''};
    }

    render(){
        var username = Meteor.user() ? Meteor.user().username : "";
        return(
            <div>
                <h1>{ username }</h1>
                <input className="w3-input" type="text" width="200" value={this.state.username} onChange={this.saveUsername}></input>
                <button className="w3-button w3-blue" color="#2196F3" width="200" height="30" onClick={this.changeUsername}>Change username</button>
            </div>
        );
    }

    saveUsername(evt){
        this.setState({username: evt.target.value});
    }

    changeUsername(){
        var self = this;
        Meteor.call("users.changeUsername",this.state.username);
        this.setState(this.state);
    }
}

import React, { Component } from "react";
import Login from "../Pages/Login";

class UserInfo extends Component {
    state = {
        email: null,
        displayName: null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({ user });
            }
        });
    }

    authenticate = provider => {
        console.log(provider);
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopUp(authProvider)
            .then(this.authHandler);
    };

    authHandler = async authData => {
        const user = authData.user;
        this.setState({
            email: user.email,
            displayName: user.displayName
        });
    };

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({email: null, displayName: null});
    };

  render() {
    return <Login />;
    
  }
}

export default UserInfo;
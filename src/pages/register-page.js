import React, {PureComponent} from "react";
import * as firebase from "firebase";

const authHandler = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage)
        // ...
    });
}

class FormRegister extends PureComponent {
    state = {
        email:"",
        password:""
    }

    changeHandler = (e) => {
        const {value,name} = e.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        const {email,password} = this.state;
        return (
            <form onSubmit={(e) => {e.preventDefault(); authHandler(email,password)}}>
                <input type={"email"} name="email" value={this.state.email} onChange={this.changeHandler}/>
                <input type={"password"} name="password" value={this.state.password} onChange={this.changeHandler}/>
                <input type={"submit"}/>
            </form>
        );
    }
}


export default FormRegister

// import React, {useContext, useState} from 'react';
import React, {useState} from 'react';
// import classes from '../../style/index.css';
import { connect } from "react-redux";
import {userAuthenticated,userToken} from "../../store/actions";
import {useHistory} from "react-router-dom";
// import ServiceContext from "../service-context/service-context";

const Login = ({ userAuthenticated }) => {

    // const Service = useContext(ServiceContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault();
        userAuthenticated();
        userToken();
        history.push('/');
        // Service.loginUser(email, password)
        //     .then(response => {
        //         userAuthenticated();
        //         console.log(response);
        //         history.push('/');
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //         alert("Try Again");
        //     });
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword( e.target.value );
    }

    return (
        <>
            <form className='login-form' onSubmit={onSubmit}>
                <legend>Login</legend>
                <div className="form-group">
                    <label htmlFor="loginInputEmail">Email address</label>
                    <input type="email" className="form-control" id="loginInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" onChange={onEmailChange} value={email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="loginInputPassword">Password</label>
                    <input type="password" className="form-control" id="loginInputPassword"
                        placeholder="Password" onChange={onPasswordChange} value={password}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    );
}

const mapDispatchToProps = {
    userAuthenticated,
}

export default connect(undefined, mapDispatchToProps)(Login);
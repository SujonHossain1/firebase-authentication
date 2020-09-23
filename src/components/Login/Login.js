import React, { useContext, useState } from 'react';
import {
    initializeAppFirebase,
    signInWithGithub,
    signInWithGoogle,
    signUpWithEmailAndPassword,
    signInWithEmailAndPasswordOwn,
    signInWithFacebook
} from '../FirebaseManager/FirebaseManager';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { UserContext } from '../../App';

const Login = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    initializeAppFirebase();

    // SignIn With Github
    const signInGithub = () => {
        signInWithGithub()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch(err => {
                setLoggedInUser(err);
            })
    }
    // SignIn With Google
    const signInGoogle = () => {
        signInWithGoogle()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch(err => {
                setLoggedInUser(err);
            })
    }
    // SignIn With Facebook
    const signInFacebook = () => {
        signInWithFacebook()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch(err => {
                setLoggedInUser(err);
            })
    }

    const handleInputField = (event) => {
        const { name, value } = event.target;
        let isValidInputField = true;
        if (name === "name") {
            isValidInputField = value.length > 0;
        } else if (name === "email") {
            isValidInputField = /\S+@\S+\.\S+/.test(String(value).toLowerCase())
        } else if (name === "password") {
            isValidInputField = value.length > 6;
        }
        if (isValidInputField) {
            setUser((prevData) => {
                return {
                    ...prevData,
                    [name]: value
                }
            })
        }
    }

    // SignUp With Name, Password, Email
    const handleSignUpSubmit = (event) => {
        const { name, email, password } = user;
        if (name && email && password) {
            signUpWithEmailAndPassword(name, email, password)
                .then(res => {
                    setLoggedInUser(res);
                })
                .catch(err => {
                    setLoggedInUser(err);
                })
        }
        event.preventDefault();
    }

    // SignIn With Email, Password
    const handleSignInSubmit = (event) => {
        const { email, password } = user;
        if (email && password) {
            signInWithEmailAndPasswordOwn(email, password)
                .then(res => {
                    setLoggedInUser(res);
                    history.replace(from);
                    
                })
                .catch(err => {
                    setLoggedInUser(err);
                })
        }
        event.preventDefault();
    }

    return (
        <div className="container jumbotron w-75 mx-auto my-3">
            <div className="d-flex justify-content-around ">
                <button onClick={signInGithub} className="btn btn-outline-success">SignIn With Github</button>
                <button onClick={signInGoogle} className="btn btn-outline-dark">SignIn With Google</button>
                <button onClick={signInFacebook} className="btn btn-outline-primary"> SignIn With Facebook</button>
            </div>

            { newUser === false && <form onSubmit={handleSignInSubmit} className="mt-5 pt-3 col-md-6 mx-auto">
                <h4>Login Your Account</h4>
                <div className="form-group">
                    <input
                        onBlur={handleInputField}
                        type="email"
                        name="email"
                        className="form-control my-2"
                        placeholder="Email Address"
                        defaultValue={user.email}
                    />
                </div>
                <div className="form-group">
                    <input
                        onBlur={handleInputField}
                        type="password"
                        name="password"
                        className="form-control my-2"
                        placeholder="Password"
                        defaultValue={user.password}
                    />
                </div>
                <button type="submit" className="btn btn-success">SignIn</button>
            </form>}

            { newUser && <form onSubmit={handleSignUpSubmit} className="mt-5 pt-3 col-md-6 mx-auto">
                <h4>Create A New Account</h4>
                <div className="form-group">
                    <input
                        onBlur={handleInputField}
                        type="text"
                        name="name"
                        className="form-control my-2"
                        placeholder="Your Name"
                        defaultValue={user.name}
                    />
                </div>
                <div className="form-group">
                    <input
                        onBlur={handleInputField}
                        type="email"
                        name="email"
                        className="form-control my-2"
                        placeholder="Email Address"
                        defaultValue={user.email}
                    />
                </div>
                <div className="form-group">
                    <input
                        onBlur={handleInputField}
                        type="password"
                        name="password"
                        className="form-control my-2"
                        placeholder="Password"
                        defaultValue={user.password}
                    />
                </div>
                <button type="submit" className="btn btn-success">SignUp</button>
            </form>}



            <p onClick={() => setNewUser(!newUser)} className="have-account">
                {
                    newUser ? "Already have an account" : "Crate a New Account"
                }
            </p>

            <div className="mt-3 text-center">
                {
                    loggedInUser.isSignIn && <p style={{ color: 'green' }}>loggedIn Logged In Successfully</p>
                }
                <p style={{ color: 'red' }}> {loggedInUser.error} </p>
            </div>
        </div>
    );
};

export default Login;
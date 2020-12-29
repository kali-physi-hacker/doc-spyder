import React from 'react';
import {Link} from "react-router-dom"

import Content from "../../components/Content";

import bgImage from '../../assets/img/login-banner.png';


const AnimatedInput = props => {
    const handleFocus = e => {
        e.target.parentNode.classList.add("focused")
    }

    const handleBlur = e => {
        e.target.parentNode.classList.remove("focused")
    }

    return (
        <div className="form-group form-focus">
            <input onBlur={handleBlur} onFocus={handleFocus} type={props.type} className="form-control floating"/>
            <label className="focus-label">{props.label}</label>
        </div>
    )
}


const SocialBtn = props => {
    return (
        <div className="col-6">
            <Link to="#" className={`btn btn-${props.social} btn-block`}><i
                className={`fab fa-${props.social} mr-1`}></i> Login</Link>
        </div>
    )
}


const AuthActionBtn = props => {
    return (
        <button className="btn btn-primary btn-block btn-lg login-btn"
                type="submit">{props.action}
        </button>
    )
}

const Login = () => {
    return (
        <Content className="bg-white">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <div className="account-content">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <img src={bgImage} className="img-fluid" alt="Doccure Login"/>
                                </div>
                                <div className="col-md-12 col-lg-6 login-right">
                                    <div className="login-header">
                                        <h3>Login <span>Doccure</span></h3>

                                    </div>
                                    <form action="https://dreamguys.co.in/demo/doccure/index.html">
                                        <AnimatedInput type={"email"} label={"Email"}/>
                                        <AnimatedInput type={"password"} label={"Password"}/>

                                        <div className="text-right">
                                            <Link className="forgot-link" to={"/forget-password"}>Forgot Password
                                                ?</Link>
                                        </div>

                                        <AuthActionBtn action={"Login"} />

                                        <div className="login-or">
                                            <span className="or-line"></span>
                                            <span className="span-or">or</span>
                                        </div>
                                        <div className="row form-row social-login">
                                            <SocialBtn social={"facebook"}/>
                                            <SocialBtn social={"google"}/>
                                        </div>
                                        <div className="text-center dont-have">Don’t have an account? <Link
                                            to="#">Register</Link></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </Content>
    );
}

export default Login;
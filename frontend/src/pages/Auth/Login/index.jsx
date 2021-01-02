import React from 'react';
import {Link} from "react-router-dom"

import AuthWrapper, {AnimatedInput, AuthActionBtn, SocialBtn} from "../index"

const Login = () => {
    return (
        <AuthWrapper title={"Login"}>
            <form>
                <AnimatedInput type={"email"} label={"Email"}/>
                <AnimatedInput type={"password"} label={"Password"}/>

                <div className="text-right">
                    <Link className="forgot-link" to={"/forget-password"}>Forgot Password
                        ?</Link>
                </div>

                <AuthActionBtn action={"Login"}/>

                <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                </div>
                <div className="row form-row social-login">
                    <SocialBtn social={"facebook"}/>
                    <SocialBtn social={"google"}/>
                </div>
                <div className="text-center dont-have">Don’t have an account? <Link
                    to="/register">Register</Link></div>
            </form>
        </AuthWrapper>
    );
}

export default Login;
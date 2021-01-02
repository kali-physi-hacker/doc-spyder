import React from 'react';
import {Link} from 'react-router-dom';

import AuthWrapper, {AnimatedInput} from "../index";

const ForgetPassword = () => {
    return (
        <AuthWrapper title={"Forgot Password ?"} description={"Enter your email to get a password reset link"}>
            <form>
                <AnimatedInput type={"email"} label={"Email"} />
                <div className="text-right">
                    <Link className="forgot-link" to="#">Remember your password?</Link>
                </div>
                <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
            </form>
        </AuthWrapper>
    );
}

export default ForgetPassword;
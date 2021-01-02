import React, {useState} from 'react';
import {Link} from "react-router-dom";

import AuthWrapper, {AnimatedInput, AuthActionBtn, SocialBtn} from "../index"
import ToggleIcon from "../../../components/ToggleIcon";


const Register = () => {
    const [isDoctor, setIsDoctor] = useState(false)

    return (
        <AuthWrapper title={`Register as ${isDoctor ? "Doctor" : "Patient"}`}>
            <form>
                <AnimatedInput label={"Name"} type={"text"} />
                <AnimatedInput label={"Mobile Number"} type={"text"} />
                <AnimatedInput label={"Password"} type={"password"} />

                <div className="text-right">
                    <Link className="forgot-link" to={"/login"}>Already have an account?</Link>
                </div>
                <ToggleIcon onClick={e=> setIsDoctor(!isDoctor)} toggle={isDoctor} bg={"var(--primary)"} />
                <AuthActionBtn action={"Signup"} />
                <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                </div>
                <div className="row form-row social-login">
                    <SocialBtn social={"facebook"} />
                    <SocialBtn social={"google"} />
                </div>
            </form>
        </AuthWrapper>
    );
}

export default Register;
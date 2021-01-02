import React from 'react';
import {Link} from "react-router-dom"

import Content from "../../components/Content";

import bgImage from '../../assets/img/login-banner.png';


export const AnimatedInput = props => {
    const handleFocus = e => {
        e.target.parentNode.classList.add("focused")
    }

    const handleBlur = e => {
        e.target.parentNode.classList.remove("focused")
    }

    return (
        <div className="form-group form-focus">
            <input value={props.value} onChange={props.onChange} onBlur={handleBlur} onFocus={handleFocus} type={props.type} className="form-control floating"/>
            <label className="focus-label">{props.label}</label>
        </div>
    )
}


export const SocialBtn = props => {
    return (
        <div className="col-6">
            <Link to="#" className={`btn btn-${props.social} btn-block`}><i
                className={`fab fa-${props.social} mr-1`}></i> Login</Link>
        </div>
    )
}


export const AuthActionBtn = props => {
    return (
        <button className="btn btn-primary btn-block btn-lg login-btn"
                type="submit">{props.action}
        </button>
    )
}

const Auth = props => {
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
                                        <h3>{props.title}</h3>
                                        <p className="small text-muted">{props.description}</p>
                                    </div>
                                    {props.children}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </Content>
    );
}

export default Auth;
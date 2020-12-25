import React from 'react';

import ForgetImage from '../../assets/img/login-banner.png'

const ForgetPassword = () => {
    return (
        <div className="content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        {/*Account Content*/}
                        <div className="account-content">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <img src={ForgetImage} className="img-fluid" alt="Login Banner"/>
                                </div>
                                <div className="col-md-12 col-lg-6 login-right">
                                    <div className="login-header">
                                        <h3>Forgot Password?</h3>
                                        <p className="small text-muted">Enter your email to get a password reset
                                            link</p>
                                    </div>

                                    {/*Forgot Password Form */}
                                    <form action="https://dreamguys.co.in/demo/doccure/login.html">
                                        <div className="form-group form-focus">
                                            <input type="email" className="form-control floating"/>
                                            <label className="focus-label">Email</label>
                                        </div>
                                        <div className="text-right">
                                            <a className="forgot-link" href="login.html">Remember your password?</a>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-lg login-btn"
                                                type="submit">Reset Password
                                        </button>
                                    </form>
                                    {/*/Forgot Password Form */}

                                </div>
                            </div>
                        </div>
                        {/*/Account Content */}

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ForgetPassword;
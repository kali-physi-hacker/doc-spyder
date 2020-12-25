import React from 'react'

// Third Party Library Imports Here
import {Route, Switch} from 'react-router-dom'

// My Components (Pages) Imports Here
import Layout from "./components/Layout";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgotPassword'
import Calendar from './pages/Calendar';
import VoiceCall from './pages/VoiceCall';
import VideoCall from './pages/VideoCall';
import SearchDoctor from './pages/SearchDoctor';


const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path={"/"} exact={true} component={Home}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/register"} component={Register}/>
                <Route path={"/forget-password"} component={ForgetPassword}/>
                <Route path={"/calendar"} component={Calendar}/>
                <Route path={"/voice-call"} component={VoiceCall}/>
                <Route path={"/video-call"} component={VideoCall}/>
                <Route path={"/search"} component={SearchDoctor}/>
            </Switch>
        </Layout>
    )
}


export default App
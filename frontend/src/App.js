import React from 'react'

// Third Party Library Imports Here
import {Route, Switch} from 'react-router-dom'

// My Components (Pages) Imports Here
import Layout from "./components/Layout";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword'
import Calendar from './pages/Calendar';
import VoiceCall from './pages/Voice-Call';
import VideoCall from './pages/Video-Call';
import SearchDoctor from './pages/Search-Dorctor';
import Invoices from './components/Invoices/Invoices';
import InvoiceView from './components/Invoices/Invoice-View';

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
                <Route path={"/invoices"} component={Invoices}/>
                <Route path={"/invoice-view"} component={InvoiceView}/>
            </Switch>
        </Layout>
    )
}


export default App
import React from 'react'

// Third Party Library Imports Here
import {Route, Switch} from 'react-router-dom'

// My Components (Pages) Imports Here
import Layout from "./components/Layout/Layout";
import Home from './pages/Home'


const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path={"/"} exact={true} component={Home}/>
            </Switch>
        </Layout>
    )
}


export default App
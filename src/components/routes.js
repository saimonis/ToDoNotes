import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import FormAuth from "../pages/auth-page";
import FormRegister from "../pages/register-page";
import InfoPage from "../pages/info-page";
import ListPage from "../pages/list-page";
import NewPublic from "../pages/admin-panel";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/content" component={NewPublic}/>
                <Route path="/" component={ListPage} exact/>
                <Route path="/login" component={FormAuth}/>
                <Route path="/register" component={FormRegister}/>
                <Route path="/:id" render={(historyState)=>{
                    return (<InfoPage routeState={historyState}/>)
                }}/>

            </Switch>
        </>
    )
}

export default Routes
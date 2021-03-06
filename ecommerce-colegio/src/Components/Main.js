import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import PostData from './PostData';
import Inicio from './Inicio';
import Help from './Help';
import MainPay from './MainPay';
import ChildPayment from './ChildPayment';

const Main=() =>(
    <Switch>
        <Route exact path="/LandingPage" component={LandingPage} /> 
        <Route exact path="/Inicio" component={Inicio} /> 
        <Route exact path="/Help" component={Help} /> 
        <Route exact path="/PostData" component={PostData} /> 
        <Route exact path="/MainPay" component={MainPay} />
        <Route exact path="/ChildPayment" component={ChildPayment} />
    </Switch>
)

export default Main;
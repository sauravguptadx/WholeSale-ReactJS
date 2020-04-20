import React from 'react';
import Login from './registration/Login'
import MainHomePage from './mainpage/AdminHome'
import MyOrders from './tables/MyOrders'
import StockTable from './tables/StockTable'
import PlaceOrder from './tables/PlaceOrder'
import { BrowserRouter, Route } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import LogOutComponent from './mainpage/LogOutComponent';
import UserHome from './mainpage/UserHome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route path = '/' exact component = {Login}/>  
      <Route path = '/AdminHome' exact component = {MainHomePage}/>
      <Route path = '/UserHome' exact component = {UserHome}/>
      <Route path = '/UserHome/MyOrders' exact component = {MyOrders}/>
      <Route path = '/UserHome/PlaceOrder' exact component = {PlaceOrder}/>
      <Route path = '/AdminHome/StockTable' exact component = {StockTable}/>
      <Route path = '/LogOutComponent' component = {LogOutComponent}/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;

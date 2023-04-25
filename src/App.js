import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';



export default class App extends Component{
  render(){
    return(
      <div>
        <Router> 

        <Navbar/>
         
        <Routes>
          <Route path='/' element={<News pageSize={5} country="in" category="sports" />}>
          </Route>

          <Route path='/Cricket'element={<News pageSize={5} country="in" category="cricket" />}>
          </Route>

          <Route path='/Football'element={<News pageSize={5} country="in" category="business" />}>
          </Route>

          <Route path='/Hockey'element={<News pageSize={5} country="in" category="technology" />}>
          </Route>

          <Route path='/Tennis'element={<News pageSize={5} country="in" category="general" />}>
          </Route>
        </Routes>
        
        </Router>
      </div>
    )
  }
}
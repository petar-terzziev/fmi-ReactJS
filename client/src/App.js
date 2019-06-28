import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './App.css';
class App extends Component {
  render() {
    return (
     <Provider store={store}> 
     <Router>
       <Navbar />
          <Route exact path="/register" component={Register} />
           <Route exact path="/login" component={Login} />
           <Route exact path = "/profile:id" component={Profile}/>
  
     </Router>

     </Provider>
    );
  }
}

export default App;

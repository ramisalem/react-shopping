import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom' ; 
import Login from './Components/Login/login';
import Cart from './Components/Cart/Cart';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import SignUp from './Components/signup/signup';

const routing = (  
    <Router>
       <header>
        <div className="nav">
            <div className="container">
                <h2> fruit <span>market</span></h2>
                <ul>
                    <Link  to="/">Home</Link> 
                    <Link  to="/login" >Login</Link>
                    <Link  to="/signup" >SignUp</Link>
                    <Link  to="cart"  >Cart</Link>
                    <Link  to="">contact</Link>
                </ul>
            </div>
        </div>
    </header>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/cart" component={Cart} />
        </Switch>
    </Router>
  
  )

  ReactDOM.render(  routing  , document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

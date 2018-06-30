import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
  <div>
  <Route exact path="/" component={App}></Route>
  <Route path="/about" component={About}></Route>
  <Route path="/contact" component={Contact}></Route>
  </div>
</Router>


  , document.getElementById('root'));
registerServiceWorker();

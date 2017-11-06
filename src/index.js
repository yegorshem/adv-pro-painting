import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import About from './components/About'
import Contact from './components/Contact'


ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/gallery' component={Gallery} />
      <Route exact path='/reviews' component={Reviews} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();

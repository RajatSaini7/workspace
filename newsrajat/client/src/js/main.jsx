
import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory, Route, Router, IndexRoute}
= require('react-router');

import About from './components/About.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import FavNewsComponent from './components/FavNewsComponent.jsx';
import Contact from './components/Contact.jsx';
import NavBarComponent from './components/NavBarComponent.jsx';

class MainComponent extends React.Component{

  render(){

    return (
      <div>
      <NavBarComponent/>
      <br/><br/><br/><br/>
      {this.props.children}
      </div>
    )
  }
}
ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={MainComponent} >
  <IndexRoute component={HomeComponent}/>
  <Route path="/home" component={HomeComponent}/>
  <Route path="/favnews" component={FavNewsComponent}/>
  <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>

  </Route>
  </Router>,document.getElementById('content'));

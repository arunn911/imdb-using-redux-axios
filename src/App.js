import './App.scss';
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MovieCard from './components/MovieCard/MovieCard';
function App() {


  return (
    <div className="App">
      <Router>
       <Header/>
       <div className="container">
       <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/m" component={MovieCard}/>  
        <Route path = "/movie/:imdbID" component={MovieDetails}/>
        <Route component={PageNotFound}/>  
        </Switch>
        </div>
        <Footer/>  
      </Router>
    </div>
  )
}

export default App;

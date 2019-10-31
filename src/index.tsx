import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import Bill from './pages/Bills'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import About from './pages/About'
import Header from './components/Header'
import Home from './pages/Home'

ReactDOM.render(
  <div className='App'>
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/bill' component={Bill} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
)

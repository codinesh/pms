import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import App from './App'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import About from './components/About'
import logo from './assets/images/logo.svg'
import './assets/styles/App.css'
import UserDetails from './components/UserDetails'

ReactDOM.render(
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <UserDetails name='Dinesh' />
    </header>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={About} />
      </div>
    </Router>
  </div>,
  document.getElementById('root')
)

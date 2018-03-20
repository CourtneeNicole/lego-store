import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/Home'


const App = () => (
  <Router>
    <Home/>
  </Router>
)
ReactDom.render(<App />, document.getElementById('root'));
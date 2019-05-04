import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'
import EventsIndex from './components/eventsIndex'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <nav className="navbar is-primary">
            <Link to="/">Home</Link>
            <Link to="/eventsIndex">Events</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/eventsIndex" component={EventsIndex} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

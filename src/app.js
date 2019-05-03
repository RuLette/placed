import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import DataIndex from './components/DataIndex'
import DataShow from './components/DataShow'
import DataCard from './components/DataCard'
import BikeShow from './components/showBike'

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
            <Link to="/dataIndex">Data Index</Link>
            <Link to="/dataShow">Data Show</Link>
            <Link to="/dataCard">Data Card</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dataIndex" component={DataIndex} />
            <Route path="/dataShow" component={DataShow} />
            <Route path="/dataCard/:bikepoint" component={BikeShow} />
            <Route path="/dataCard" component={DataCard} />
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

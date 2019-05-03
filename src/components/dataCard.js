import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class DataCard extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/bikepoint')
      .then(res => {
        console.log(res.data)
        return res.data.map(bikepoint => ({bikepoint: bikepoint.id, name: bikepoint.commonName, url: bikepoint.url}))
      })
      .then(res => this.setState({data: res}))
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="columns">
        <div className="column is-half">

          <div>
            <h1>TFL Bike points</h1>
            {this.state.data.map(bikeinfo =>
              <div key={bikeinfo.bikepoint}>
                <p><Link to={`/dataCard/${bikeinfo.bikepoint}`}><strong>{bikeinfo.bikepoint}</strong></Link>: can be found at {bikeinfo.name}</p>
              </div>)}
          </div>
        </div>
      </div>
    )
  }
}


export default DataCard

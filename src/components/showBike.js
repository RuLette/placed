import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Map from './map'

class BikeShow extends React.Component {
  constructor() {
    super()
    this.state = {
    }
    this.mapCenter = { lat: 51.515, lng: -0.078 }
  }
  componentDidMount () {
    axios.get(`https://api.tfl.gov.uk/bikepoint/${this.props.match.params.bikepoint}`)
      .then(res => {
        const data = {name: res.data.commonName, url: res.data.url, lat: res.data.lat, lng: res.data.lon}
        this.setState({ data })
      })
  }
  // const location = {
  //   lat: this.state.data.lat,
  //   lng: this.state.data.lon
  // }
  // console.log({location})

  //if state.data is true, run this.state.data.url & this.state.data.id
  render () {

    return (
      <div className="columns">
        <div className="column is-8">
          {this.state.data && <p><strong>{this.state.data.name}</strong></p>}
          {this.state.data && <p>{this.state.data.lat}</p>}
          {this.state.data && <p>{this.state.data.lng}</p>}
          <Map
            center={this.mapCenter}
          />
        </div>
      </div>
    )
  }
}

export default BikeShow

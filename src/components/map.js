import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.CUTEKITTY

class Map extends React.Component {
  constructor() {
    super()
    this.markers = []
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: 10
    })
  }

  render() {
    return(
      <div className="map" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map

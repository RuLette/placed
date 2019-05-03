import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import { Link } from 'react-router-dom'

const eventkey = process.env.EVENTKEY

mapboxgl.accessToken = process.env.CUTEKITTY

class DataIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=${eventkey}`)
      .then(res => {
        this.setState({data: res.data.results})
      })
  }

  render() {
    const {data} = this.state
    console.log(data)
    const openingTimesForEachPlace = data.map(eachplace => ({
      Venue: eachplace.venue.name,
      OpeningTimes: eachplace.openingtimes,
      Image: eachplace.imageurl}))
    console.log(openingTimesForEachPlace)
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div>
              {openingTimesForEachPlace.map(venue => (
                <div key ={venue.Venue}>
                  <p>{venue.Venue} - Opening times: {venue.OpeningTimes.doorsopen}</p>
                  <div className="tile is-child">
                    <img src={venue.Image}></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default DataIndex

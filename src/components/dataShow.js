import React from 'react'
import axios from 'axios'


class DataShow extends React.Component {

  constructor() {
    super()

    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({data: res.data}))
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="container">
        {this.state.data.map(country =>
          <div key={country.name}><p>{country.name} - {country.region}</p>
            <img src={country.flag}></img></div>)}
      </div>
    )
  }
}

export default DataShow

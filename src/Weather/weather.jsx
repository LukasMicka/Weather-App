import React from 'react';

export default class Weather extends React.Component {
    render() {
        return (
          <div className="weather">
            <h4 className="city">City: {this.props.city}</h4>
            <h5 className="country">Country: {this.props.country}</h5>
            <h5 className="description">{this.props.description}</h5>
            <p className="temp">Current temperature: {this.props.temp}</p>
            <p className="temp_min">Temperature from: {this.props.temp_min}</p>
            <p className="temp_max">Temperature to: {this.props.temp_max}</p>
            <p className="wind">Wind speed: {this.props.wind}</p>
          </div>
        );
    }
}
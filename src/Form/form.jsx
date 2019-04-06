import React from 'react';
import Weather from '../Weather/weather.jsx';

export default class Form extends React.Component {
  state = {
    results: [],
    value: ""
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=986c9afb418a7878f71583719dcc6599`)
      .then(resp => resp.json())
      .then(json => /* this.setState({results: json})) */
      console.log(json));
  }

    render() {
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label>Enter city: </label>
              <input 
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                 />
              <br />
              <button type="submit">Submit</button>
              <br/>
            </form>
          </div>
        );
    }
}
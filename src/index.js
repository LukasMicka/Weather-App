import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form/form.jsx';
import Weather from './Weather/weather.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  state = {
    results: [],
    city: null
  }

  handleSubmit = (cityEntered) => {
    this.setState({city: cityEntered})
  }

  render() {
      return (
        <>
            <Form handleSubmit={this.handleSubmit} />
            <Weather />
        </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
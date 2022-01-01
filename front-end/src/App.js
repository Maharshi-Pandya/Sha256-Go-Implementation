import React, {Component} from 'react';
import './App.css';

// components
import Heading from './components/Heading';
import ContentForm from './components/ContentForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container vh-100">
          <div className="row align-items-center vh-100 gx-5">
            <Heading />
            <ContentForm />
          </div>
      </div>
    );
  }
}

export default App;

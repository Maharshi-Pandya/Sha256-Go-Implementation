import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // value input by the user
    this.state = {
      value: '',
      shaHash: '0xe3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // on change in the textbox
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // on submitting
  handleSubmit(event) {
    event.preventDefault();

    // to be passed in the body
    let messObj = {
      message: this.state.value,
    };

    // fetch the post request to Go server
    let fetchURL = 'http://localhost:5000/calc';

    fetch(fetchURL, {
      method: 'POST',
      body: JSON.stringify(messObj),
    })
    .then(response => response.json())
    .then((hashObj) => {
      // set the state with hash value
      this.setState({shaHash: hashObj["bytestr"]});
    });
  }

  render() {
    return (
      <div className="container vh-100">
          <div className="row align-items-center vh-100 gx-5">
              <div className="col-6">
                <div className="jumbotron header p-4">
                  <h1 className="display-4 sapling">Sha256 in here!</h1>
                  <p className="text-monospace text-white mt-5">Are you at that point in life where you unnecessarily want to know the sha256 hash of random strings? <br/> I pity you, but okay here you are...</p>
                  <p className="text-monospace text-white">C'mon don't be shy, click below to view the source code.</p>
                  <hr className="sapling"/>
                  <a className="btn btn-primary btn-lg" href="https://github.com/Maharshi-Pandya/Sha256-Go-Implementation" role="button">View Source</a>
                </div>
              </div>
  
              <div className="col"> 
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <textarea 
                    className="form-control"
                    id="userMessage"
                    rows="3"
                    placeholder="Enter your message..."
                    value={this.state.value}
                    onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <button 
                  type="submit"
                  className="mt-3 btn btn-primary sub-btn">Submit</button>
                </form>
  
                <div className="mt-5">
                  <h6 className="text-white">
                    Hash is:
                  </h6>
                  <p className="p-2 hash text-center">
                    {this.state.shaHash}
                  </p>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default App;

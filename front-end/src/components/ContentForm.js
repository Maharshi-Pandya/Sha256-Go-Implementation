import React, { Component, Fragment } from 'react';

class ContentForm extends Component {
  constructor(props) {
    super(props);

    // value input by the user
    this.state = {
      value: '',
      shaHash: '0xe3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      copied: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  outputUpdate(textValue) {
    // to be passed in the body
    let messObj = {
      message: textValue,
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
        // set the copied status to false
        this.setState({ shaHash: hashObj["bytestr"] });
        this.setState({ copied: false });
      });
  }

  // on change in the textbox
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.outputUpdate(event.target.value);
  }

  // on submitting
  handleSubmit(event) {
    event.preventDefault();
    this.outputUpdate(this.state.value);
  }

  render() {
    return (
      <Fragment>
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

            <p
              className="p-2 hash text-center"
              onClick={() => {
                navigator.clipboard.writeText(this.state.shaHash);
                this.setState({ copied: true });
              }}>
              {this.state.shaHash}
            </p>

            <p className="copy-text text-center">
              {this.state.copied ? "Copied!" : "Click the textbox to copy the hash to clipboard..."}
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default ContentForm;
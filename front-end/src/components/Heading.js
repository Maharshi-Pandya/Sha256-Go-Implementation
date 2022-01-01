import React, {Component, Fragment} from 'react';

class Heading extends Component {
  render() {
    return (
      <Fragment>
        <div className="col">
          <div className="jumbotron header p-4">
            <h1 className="display-4 sapling">Sha256 in here!</h1>
            <p className="text-monospace text-white mt-5">Are you at that point in life where you unnecessarily want to know the sha256 hash of random strings? <br/> I pity you, but okay here you are...</p>
            <p className="text-monospace text-white">C'mon don't be shy, click below to view the source code.</p>
            <hr className="sapling"/>
            <a className="btn btn-primary btn-lg" href="https://github.com/Maharshi-Pandya/Sha256-Go-Implementation" role="button">View Source</a>
          </div>
        </div>
      </Fragment>
    )
  }
};

export default Heading;
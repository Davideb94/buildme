import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="scroller">
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="panel">
          <div className={ "panel_elem" }>
            <img src={} />
          </div>
          <div className={ "panel_elem" }>
          <img src={} />
          </div>
          <div className={ "panel_elem" }>
          <img src={} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

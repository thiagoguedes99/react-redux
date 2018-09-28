import React, { Component } from 'react';

import './Content.css';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <aside className="content__container">
        <h3>sou content</h3>
      </aside>
    );
  }
}

export default Content;

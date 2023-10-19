import React, { Component } from 'react';

class Video extends Component {
    render() {
      return (
        <div className="embed-responsive embed-responsive-16by9">
          <video className="embed-responsive-item" controls src={this.props.src} />
        </div>
      );
    }
  }

export default Video;
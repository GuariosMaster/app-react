import React, { Component } from 'react';
import Menu from './Menu';
import Video from './Video';

const VIDEOS = {
  venado: 'https://bit.ly/3TjD5PQ',
  caracol: 'https://bit.ly/3SdE6aD',
  gato: 'https://bit.ly/3MHpq2t',
  arana: 'https://bit.ly/3CGIw46',
};

class VideoPlayer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedVideo: 'venado',
      };
    }
  
    handleVideoChange = (video) => {
      this.setState({ selectedVideo: video });
    }
  
    render() {
      return (
        <div className="container mt-5">
          <h1 className="text-center">Video Player</h1>
          <Menu
            videos={VIDEOS}
            selectedVideo={this.state.selectedVideo}
            onVideoChange={this.handleVideoChange}
          />
          <Video src={VIDEOS[this.state.selectedVideo]} />
        </div>
      );
    }
  }
  
export default VideoPlayer;
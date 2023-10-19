import React, { Component } from 'react';

class Menu extends Component {
    render() {
      const { videos, selectedVideo, onVideoChange } = this.props;
  
      return (
        <div>
          <h2>Choose a Video:</h2>
          <ul className="list-group">
            {Object.keys(videos).map((video) => (
              <li key={video}>
                <button
                  onClick={() => onVideoChange(video)}
                  className={`list-group-item list-group-item-action ${video === selectedVideo ? 'active' : ''}`}
                >
                  {video}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

export default Menu;
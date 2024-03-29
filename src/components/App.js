import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import searchYouTube from '../lib/searchYouTube.js';
import handleVideoSearch from '../actions/search.js';

export default class App extends React.Component {
  //we don't need the state or constructor
  constructor(props) {
    super(props);

  }

  //This will probably go away because it will get incorporated into our initial state
  componentDidMount() {
    //this.getYouTubeVideos('react tutorials');
    store.dispatch(handleVideoSearch('kitty'));
  }


  //Still need this, because we need to query for new videos. Might need to move into search component though. 
  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };
  // };

//We don't need to set state anymore because reducer will do it, so we don't need this
  //   searchYouTube(options, (videos) =>
  //     this.setState({
  //       videos: videos,
  //       currentVideo: videos[0]
  //     })
  //   );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

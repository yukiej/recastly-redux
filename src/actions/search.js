import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// import {connect} from 'react-redux';
// import {createStore} from 'redux';
// import { render } from 'react-dom';
// import {applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  //make a request to youtube server using query
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (data) => {
      console.log(data);
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
  //create action based on data returned from server using videoList action creator
  //somehow update current video in store- possibly from grabbing first video from data returned from server
};

// var handleVideoSearch = (q) => {
 
//   //TODO:  Write an asynchronous action to handle a video search!
//   //make a request to youtube server using query
//   return (dispatch) => {
//     searchYouTube({key: YOUTUBE_API_KEY, query: q}, (data) => {
//     console.log(data);
//     store.dispatch(changeVideoList(data));
//     store.dispatch(changeVideo(data[0]));
//   });
  
  //create action based on data returned from server using videoList action creator
  //somehow update current video in store- possibly from grabbing first video from data returned from server
// };


export default handleVideoSearch;

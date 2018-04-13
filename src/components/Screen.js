import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import axios from 'axios';

class Screen extends Component {

  state = { videos: [] };

  /*getVideos() {
    axios.get('http://res.cloudinary.com/flycrow/video/upload/test/vqx5qsaltgwwoocpgbb2.mp4')
          .then(res => {
            console.log(res.data.resources);
            this.setState({ videos: res.data.resources});
    });
  }

  componentDidMount() {
    this.getVideos();
  }*/

  render() {

    const { videos }  = this.state;

    return (
      <div>
        <CloudinaryContext cloudName="flycrow">
          <div className="embed-responsive embed-responsive-4by3">
            <Video id="myVideo" publicId="test/vqx5qsaltgwwoocpgbb2" autoPlay>
              <Transformation width="250" height="150" crop="pad" />
            </Video>
          </div>
        </CloudinaryContext>
      </div>
    );
  }
}

export default Screen;

import React from 'react';
import CommentBox from './components/CommentBox';
import WebsiteCapture from './components/WebsiteCapture';
import VectorDatabase from './components/VectorDatabase';
import BrainInABox from './components/BrainInABox';
import DeepLake from './components/DeepLake';
import { addComment, addWebsite, searchData } from './utils/activeloop';
import { loginWithSupertokens } from './utils/supertokens';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      comments: [],
      websites: [],
      vectorData: [],
    };
  }

  componentDidMount() {
    loginWithSupertokens()
      .then(user => {
        this.setState({ user });
        this.loadComments();
        this.loadWebsites();
        this.loadVectorData();
      })
      .catch(err => console.error(err));
  }

  loadComments = () => {
    addComment()
      .then(comments => this.setState({ comments }))
      .catch(err => console.error(err));
  }

  loadWebsites = () => {
    addWebsite()
      .then(websites => this.setState({ websites }))
      .catch(err => console.error(err));
  }

  loadVectorData = () => {
    searchData()
      .then(vectorData => this.setState({ vectorData }))
      .catch(err => console.error(err));
  }

  render() {
    const { user, comments, websites, vectorData } = this.state;

    return (
      <div id="popup">
        <h1>Welcome, {user ? user.name : 'Guest'}</h1>
        <CommentBox comments={comments} />
        <WebsiteCapture websites={websites} />
        <VectorDatabase vectorData={vectorData} />
        <BrainInABox />
        <DeepLake />
      </div>
    );
  }
}

export default Popup;
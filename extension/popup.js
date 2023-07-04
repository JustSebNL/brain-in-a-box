import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar } from './components/SearchBar';
import { SaveButton } from './components/SaveButton';
import { CommentBox } from './components/CommentBox';
import { WebsiteCapture } from './components/WebsiteCapture';
import { VectorDatabase } from './components/VectorDatabase';
import { activeloop, supertokens, modal } from './lib';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedText: '',
      websiteMHTML: '',
      vectorData: [],
    };
  }

  componentDidMount() {
    chrome.tabs.executeScript({
      code: 'window.getSelection().toString();',
    }, (selection) => {
      this.setState({ selectedText: selection[0] });
    });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.pageCapture.saveAsMHTML({ tabId: tabs[0].id }, (mhtml) => {
        this.setState({ websiteMHTML: mhtml });
      });
    });

    activeloop.get('vectorData').then((data) => {
      this.setState({ vectorData: data });
    });
  }

  saveToVector = () => {
    const { selectedText, websiteMHTML } = this.state;
    const data = { selectedText, websiteMHTML };
    activeloop.set('vectorData', data).then(() => {
      this.setState({ vectorData: [...this.state.vectorData, data] });
    });
  }

  render() {
    const { selectedText, websiteMHTML, vectorData } = this.state;
    return (
      <div>
        <SearchBar />
        <SaveButton onClick={this.saveToVector} />
        <CommentBox text={selectedText} />
        <WebsiteCapture mhtml={websiteMHTML} />
        <VectorDatabase data={vectorData} />
      </div>
    );
  }
}

ReactDOM.render(<Popup />, document.getElementById('root'));
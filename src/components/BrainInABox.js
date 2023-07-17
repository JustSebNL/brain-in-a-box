import React from 'react';
import { activeloop } from '../utils/activeloop';
import { searchData } from '../utils/modal';

class BrainInABox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResults: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleSearch = async () => {
    const { searchQuery } = this.state;
    const searchResults = await searchData(searchQuery);
    this.setState({
      searchResults,
    });
  }

  render() {
    const { searchQuery, searchResults } = this.state;
    return (
      <div id="brain-in-a-box">
        <input
          type="text"
          value={searchQuery}
          onChange={this.handleInputChange}
          placeholder="Braininabox: {search query}"
        />
        <button onClick={this.handleSearch}>Search</button>
        <div>
          {searchResults.map((result, index) => (
            <div key={index}>
              <h3>{result.title}</h3>
              <p>{result.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
    def main():
        print("hello world")

        print("debug statement")

</new_file>

Do not rewrite the entire file. Use <copy_lines A-B/> XML tag when possible. Do not include the line numbers in the new file. Write complete implementations.
```
<new_file>
import React from 'react';
import { activeloop } from '../utils/activeloop';
import { searchData } from '../utils/activeloop';

class BrainInABox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResults: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleSearch = async () => {
    const { searchQuery } = this.state;
    const searchResults = await searchData(searchQuery);
    this.setState({
      searchResults,
    });
  }

  render() {
    const { searchQuery, searchResults } = this.state;
    return (
      <div id="brain-in-a-box">
        <input
          type="text"
          value={searchQuery}
          onChange={this.handleInputChange}
          placeholder="Braininabox: {search query}"
        />
        <button onClick={this.handleSearch}>Search</button>
        <div>
          {searchResults.map((result, index) => (
            <div key={index}>
              <h3>{result.title}</h3>
              <p>{result.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BrainInABox;
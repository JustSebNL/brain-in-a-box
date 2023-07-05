```javascript
import React from 'react';
import { activeloop } from '../utils/activeloop';

class VectorDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const data = await activeloop.get('vector-database');
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div id="vector-database">
        <h2>Vector Database</h2>
        {data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data found in the vector database.</p>
        )}
      </div>
    );
  }
}

export default VectorDatabase;
```
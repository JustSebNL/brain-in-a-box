import React from 'react';
import { activeloop } from '../utils/activeloop';

class DeepLake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vectorData: [],
    };
  }

  componentDidMount() {
    this.fetchVectorData();
  }

  fetchVectorData = async () => {
    try {
      const data = await activeloop.get('vector-database');
      this.setState({ vectorData: data });
    } catch (error) {
      console.error('Failed to fetch vector data:', error);
    }
  };

  render() {
    const { vectorData } = this.state;

    return (
      <div id="deep-lake">
        <h2>Deep Lake Vector Store</h2>
        <ul>
          {vectorData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DeepLake;
import React, { Component } from 'react';

import axios from 'axios';

import List from './List';
import Header from './Header';
import { Container } from 'reactstrap';

import { getRequestParms } from '../tools';

class App extends Component {
  state = {
    heroes: [],
    isLoading: false,
  };


  async componentDidMount() {
    // fetch heroes
    this.setState({ isLoading: true });
    const heroes = await this.fetchHeroes();

    const isLoading = false;
    this.setState({heroes, isLoading});
  }

  fetchHeroes = async () => {
    console.log('fetching data ...');
      const baseUrl = ' http://gateway.marvel.com:80';

      const path = '/v1/public/characters';
      
      const url = `${baseUrl}${path}`;      
    
      const params = getRequestParms();
      const result = await axios.get(url, {params});

      const heroes = [...result.data.data.results];
      
      return heroes;
      
  }

  render() {
    const { heroes, isLoading } = this.state;

    if (isLoading) {
      return (<p>Loading ...</p>);
    }

    return (
      <Container>
        <div className="App">
          <Header/>
          <List 
            heroes={heroes}
            {...this.props}
          />
        </div>
      </Container>
    );
  }
}

export default App;

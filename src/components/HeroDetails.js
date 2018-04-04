import React from 'react';
import Header from './Header';
import axios from 'axios';
import { getRequestParms } from '../tools';

import {Button, Media, Table, Container  } from 'reactstrap';
import { Link } from 'react-router-dom';


class HeroDetails extends React.Component {
    state = {
        hero: null,
        isLoading: false,
      };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const { params } = this.props.match;
    const heroId = params.heroId;

    const hero = await this.fetchHero(heroId);
    const isLoading = false;

    this.setState({hero, isLoading});
    
  }

  fetchHero = async (id) => {
    console.log('fetching data ...');
      const baseUrl =  'https://gateway.marvel.com';

      const path = '/v1/public/characters';
      
      const url = `${baseUrl}${path}/${id}`;      
    
      const params = getRequestParms();
      const result = await axios.get(url, {params});

      const hero= result.data.data.results[0];
      
      return hero;
      
  }


  render() {
    const {hero, isLoading} = this.state;
    if (isLoading || !hero) {
        return (<p>Loading ...</p>);
    } else {
        
        const comics = hero.comics.items;
        const series = hero.series.items;

        return (
            <Container>
                <div className="App">
                    <Header/>
                    <div>
                        <Media>
                            <Media left top href="#">
                                <Media object src={`${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`} alt={hero.name} />
                            </Media>
                            <Media body>
                                <Media heading>
                                  {  hero.name }
                                </Media>
                                { hero.description }
                            {/* comics */}
                           
                            <Table responsive className={`text-left m-4  ${comics.length ? '' : 'd-none'} `} size="sm" dark>
                                <thead>
                                <tr>
                                    <th>Comics</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                       comics.map((comic, i) => (
                                        <tr key={i}>
                                            <td>{comic.name}</td>
                                        </tr>
                                       )) 
                                    }
                                </tbody>
                            </Table>
                            {/* series */}
                            <Table responsive className={`text-left m-4  ${series.length ? '' : 'd-none'} `} size="sm" dark>
                                <thead>
                                <tr>
                                    <th>Series</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                       series.map((serie, i) => (
                                        <tr key={i}>
                                            <td>{serie.name}</td>
                                        </tr>
                                       )) 
                                    }
                                </tbody>
                            </Table>

                            <Link to="/">
                                <Button outline color="primary">Retourner à la liste des super héros 💪🏽 💪🏽</Button>
                            </Link>
                            </Media>
                        </Media>
                    </div>
                </div>
            </Container>
        )
    }
    
  }
};

export default HeroDetails;

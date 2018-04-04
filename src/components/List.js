import React from 'react';
import Hero from './Hero';

import { CardColumns } from 'reactstrap';
class List extends React.Component {
  render() {
    console.log('pros', this.props)
    const {heroes} = this.props;
    
    if (!heroes.length ) {
        return '';
    }
    console.log('test', {heroes});

    return (
      <CardColumns>
          {
            heroes.map(hero => (
            <Hero
              key={hero.id}
              hero={hero}
              {...this.props}
            />
          ))
          }
      </CardColumns>
    )
  }
};

export default List;

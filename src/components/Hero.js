import React from 'react';

import { Card, CardImg, CardBody,
  CardTitle, Button } from 'reactstrap';

class Hero extends React.Component {

  onClickDetail = (id) => () => {
    this.props.history.push(`/hero/${id}`);
  }


  render() {
    const hero = this.props.hero;

    return (
      <div>
        <Card>
          <CardImg top  width="100px" src={`${hero.thumbnail.path}/standard_xlarge.${hero.thumbnail.extension}`} alt={hero.name} />
          <CardBody>
            <CardTitle>{hero.name}</CardTitle>
            <Button outline onClick={this.onClickDetail(hero.id)}>Voir le détail</Button>
          </CardBody>
       </Card>
      </div>
    )
  }
}

export default Hero;

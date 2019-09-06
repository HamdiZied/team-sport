import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import {connect} from 'react-redux'
import Title from './title'

class RecipeReviewCard extends Component {
  render() {
    const {items}=this.props
    return (
      <div className="container partii">
        <Title title="news" />
        <div className="raw hom">
        {items.map((item, index) => (
        <Card style={{ width: '20rem', marginBottom: '30px' }}>
        <Card.Img variant="top" src={item.photo} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.subcaption}
          </Card.Text>
        </Card.Body>
      </Card>
        ))}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { 
      items: state.reduserhome 
  };
};

export default connect(mapStateToProps)(RecipeReviewCard);









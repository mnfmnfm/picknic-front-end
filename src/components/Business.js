import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

class Business extends React.Component {
  handleClick = () => {
    if (this.props.history.location.pathname !== "/profile") {
      const id = this.props.business.id;
      this.props.handleShowcard(id);
      // nice work with the router here! although you could just make the whole thing a link instead...
      // OK, never mind, I tried it and it requires more steps to make the request for that business's info.
      // Still, I'll leave my suggestion commented out... it would just require making the request when you're
      // about to show a BusinessDetail, and it would also make it so that hitting refresh on a business detail page
      // would work.
      this.props.history.push(`/business/${id}`);
    }
  }

  render() {
    const business = this.props.business;
    return (
      // <Link to={`/business/${this.props.business.id}`}>
      <Card onClick={this.handleClick} >
        <Card.Img variant="top" src={business.image_url} />
        <Card.Body>
          <Card.Title>{business.name}</Card.Title>
          <Card.Text>{business.location.display_address.join(' ')}</Card.Text>
          <Card.Text>{business.price}</Card.Text>
          <Card.Text>{`Yelp rating: ${business.rating}`}</Card.Text>
          {(this.props.history.location.pathname === "/profile") ?
            <Button variant="danger" onClick={() => this.props.handleDelete(business.id)}>Delete</Button>
            : ''
          }
        </Card.Body>
      </Card>
      // </Link>
    )
  }
}

export default withRouter(Business);

import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import Business from './Business.js';

class Profile extends React.Component {

  componentDidMount = () => {
    this.props.getFavoriteBusiness();
  }

  render() {
    return (
      <Container>
        <div>
          <h1 className="py-3">My Favorite Restaurants</h1>
          {/* This is recreating the functionality of BusinessColumns.js--would be better to just render that component here, incorporating the delete functionality into that component. */}
          <CardColumns>
            {this.props.savedBusinesses.map((business, i) =>
              // It would be better to use the buisness._id instead of the index as a key here.
              // More details: https://reactjs.org/docs/lists-and-keys.html#keys
              <Business
                key={i}
                business={business}
                handleShowcard={this.props.handleShowcard}
                handleDelete={this.props.handleDelete}
              />)}
          </CardColumns>
        </div>
      </Container>
    )
  }
}

export default Profile;

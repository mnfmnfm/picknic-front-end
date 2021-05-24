import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

class BusinessCarousel extends React.Component {
  render() {
    const business = this.props.business;
    return (
      <>
        {business.photos ?
          <Container>
            <Carousel>
              {business.photos.map((photo, i) =>
                <Carousel.Item key={i}>
                  {/* the fixed width on this img :'( */}
                  <img
                    className="d-block w-100"
                    src={photo}
                    // Should use an alt of the business name or something else useful
                    alt="First slide"
                    height={500}
                  />
                </Carousel.Item>
              )}
            </Carousel>
          </Container>
          :
          ''
        }
      </>
    )
  }
}

export default BusinessCarousel;

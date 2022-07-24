import React from "react";
import "./Content.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";


const Content = () => {
  return (
    <div>
      <Container fluid>
        <Row className='content-row-1'>
          <Col className="content-heading col-lg-2 col-md-2 col-sm-12 offset-1 ">
            <h2>About Us</h2>
          </Col>
          <Col className="info-area col-lg-5 col-md-6 col-12">
            <p>
              <span>
                The Estate TEAM headed by Estate Steinberg, prides itself in its
                unparalleled levels of service combined with a unique and
                informed perspective of the market, specifically the downtown
                luxury market of Manhattan and Brooklyn. The team is uniquely
                qualified to provide accurate data, industry perspectives and
                detailed current market conditions as well as a focused
                understanding of the luxury consumer.
              </span>
            </p>
            <p>
              The Estate TEAM has instilled tremendous value in New Development
              projects through the structuring of marketing plans, presentation
              ideas and conceptualization. The team recognizes the importance of
              adding value as opposed to just collecting commission checks, and
              has consulted on numerous levels to clients who value their
              insights and opinions tremendously.
            </p>
          </Col>
          <Col className="image-section col-lg-4 col-md-4 col-sm-12">
            <img
              src="https://theleonardsteinbergteam.com/wp-content/uploads/2015/08/SFrances_140411_0011_B-750x750.jpg"
              alt=""
            />
          </Col>
        </Row>

        <Row className="content-row-2">
          <Col className="content-heading col-lg-2 col-md-2 col-sm-12 offset-1">
            <h2>Services</h2>
          </Col>
          <Col className="info-area col-lg-9 col-md-9 col-sm-12">
            <p>
              <span>
                The Estate Team covers the complete gamut of services for
                residential brokerage. From representing sellers, developers and
                landlords through a comprehensive marketing plan to representing
                buyers and renters with an educated view of the current market,
                we strive to provide the highest quality service and go beyond
                the expected. Our services extend far beyond the close of the
                transaction and create a long time relationship based on trust
                and added value with all our clients.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;

import React from "react";
import "../Resourses/Team.css";
import {Container, Row} from 'react-bootstrap'
const Team = () => {
  return (
    <div>
    <Container fluid>
      <Row className="Team-info-row-1">
        <div className='Team-info col-lg-2 offset-1 col' >
          <h2 className="Team-heading">Team</h2>
          <p>
            Our team is consistently Downtown’s leading agents specializing in
            the luxury real estate market with a proven track record for
            integrity, professionalism and results. We represent all buyers and
            sellers from $500K to well over $20 million, with almost 2 decades
            of experience.
          </p>
        </div>
        <div className='Team-tile-area col col-lg-9 col-md-9' >
          <div className="profile col-lg-4 col-md-4 offset-1">
            <img src="" alt="" />
            <div className="Name-area">
              <h4>Steve Herington</h4>
              <br/>
              <div className='about-profile'>
                <span>Designation:</span><p>Front-End Developer</p>
                <span>Working Experience:</span><p>2yrs</p>
                <span>Contact:</span><p>+91-xxxxxxxxxx</p>
              </div>
            </div>
          </div>

          <div className="profile col-lg-4 col-md-4 offset-1">
          <img src="https://theleonardsteinbergteam.com/wp-content/uploads/2015/06/Leonard-640x640.jpg" alt="" />
            <div className="Name-area">
              <h4>Mikel Clark</h4>
              <br/>
              <div className='about-profile'>
                <span>Designation:</span><p>Back-End Developer</p>
                <span>Working Experience:</span><p>2yrs</p>
                <span>Contact:</span><p>+91-xxxxxxxxxx</p>
              </div>
            </div>
          </div>

          <div className="profile col-lg-4 col-md-4 offset-1">
          <img src="https://theleonardsteinbergteam.com/wp-content/uploads/2015/06/Leonard-640x640.jpg" alt="img" />
            <div className="Name-area">
              <h4>El Jane</h4>
              <br/>
              <div className='about-profile'>
                <span>Designation:</span><p>Ful-Stack Developer</p>
                <span>Working Experience:</span><p>3yrs</p>
                <span>Contact:</span><p>+91-xxxxxxxxxx</p>
              </div>
            </div>
          </div>

          <div className="profile col-lg-4 col-md-4 offset-1">
            <div className="Name-area">
              <h4>William Jose</h4>
              <br/>
              <div className='about-profile'>
                <span>Designation:</span><p>Front-End Developer</p>
                <span>Working Experience:</span><p>2yrs</p>
                <span>Contact:</span><p>+91-xxxxxxxxxx</p>
              </div>
            </div>
          </div>

          <div className="profile col-lg-4 col-md-4 offset-1">
            <div className="Name-area">
              <h4>Keven Wood</h4>
              <br/>
              <div className='about-profile'>
                <span>Designation:</span><p>Front-End Developer</p>
                <span>Working Experience:</span><p>2yrs</p>
                <span>Contact:</span><p>+91-xxxxxxxxxx</p>
              </div>
            </div>
          </div>

          <div className="profile col-lg-4 col-md-4 offset-1">
            <div className="Name-area">
              <h4>Robin Peter</h4>
              <br/>
              <div className='about-profile'>
                <span>Designation:</span><p>Front-End Developer</p>
                <span>Working Experience:</span><p>2yrs</p>
                <span>Contact:</span><p>+91-xxxxxxxxxx</p>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
    </div>
  );
};

export default Team;

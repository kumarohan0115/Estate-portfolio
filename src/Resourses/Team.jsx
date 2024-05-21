import React from "react";
import "../Resourses/Team.css";
import { Container, Row } from 'react-bootstrap'
const Team = () => {

  const team = [
    {
      "name": "Mikel Clark",
      "label1": "Designation",
      "value1": "Front-End Developer",
      "label2": "Working Experience:",
      "value2": "2yrs",
      "label3": "Contact",
      "value3": "+91-xxxxxxxxxx",
      "imgLink": "https://theleonardsteinbergteam.com/wp-content/uploads/2015/06/Leonard-640x640.jpg"
    },
    {
      "name": "Jack Marshal",
      "label1": "Designation",
      "value1": "Back-End Developer",
      "label2": "Working Experience:",
      "value2": "2yrs",
      "label3": "Contact",
      "value3": "+91-xxxxxxxxxx",
      "imgLink": "https://theleonardsteinbergteam.com/wp-content/uploads/2015/06/Leonard-640x640.jpg"
    },
    {
      "name": "Jack Marshal",
      "label1": "Designation",
      "value1": "Back-End Developer",
      "label2": "Working Experience:",
      "value2": "2yrs",
      "label3": "Contact",
      "value3": "+91-xxxxxxxxxx",
      "imgLink": "https://theleonardsteinbergteam.com/wp-content/uploads/2015/06/Leonard-640x640.jpg"
    }
  ]

  return (
    <div>
      <Container fluid>
        <Row className="Team-info-row-1">
          <div className='Team-info col-lg-2 offset-lg-1 col' >
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
            {

              team.map((ele, i) => {
                return <div key={i} className="profile col-lg-4 col-md-4 offset-1">
                  <img src={ele.imgLink} alt="" />
                  <div className="Name-area">
                    <h4>{ele.name}</h4>
                    <br />
                    <div className='about-profile'>
                      <span>{ele.label1}</span><p>{ele.value1}</p>
                      <span>{ele.label2}</span><p>{ele.value2}</p>
                      <span>{ele.label3}</span><p>{ele.value3}</p>
                    </div>
                  </div>
                </div>

              })
            }
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Team;

import React from 'react'
import '../Resourses/infoTile.css'
import {Container, Row, Col} from 'react-bootstrap'
const InfoTiles = () => {
  return (
    <div>
      <Container fluid>
      <Row className='info-tile-row-1'>
        <Col className=' col-lg-4 col-md-4 col-sm-6 cards'>
          <div className="tile-container">
            <h2>Experience</h2>
            {/* <p> */}
              <ul>
                <li>Unparalleled Transaction Experience: Responsible for over $2 billion in residential transactions.</li>
                <li>Consistently ranked as one of the top ten Broker Teams in the United States by The Wall Street Journal.</li>
                <li>Our team is consistently Downtown<span>'</span>s leading brokers specializing in the luxury real estate market with a proven track record for integrity, professionalism and results.</li>
              </ul>
            {/* </p> */}
          </div>
        </Col>
        <Col className=' col-lg-4 col-md-4 col-sm-6 cards' >
          <div className="tile-container">
            <h2>Strategy</h2>
            {/* <p> */}
              <ul>
                <li>We provide a pricing strategy to meet your expectations based on recent comparable sales & competitively listed properties.</li>
                <li>Creative targeted marketing strategies for your property and sophisticated valuation tools to make sure your property sells quickly and at the right price.</li>
                <li>We have a team to insure that your property is shown anytime, by an educated professional, often at short notice, never missing an appointment.</li>
                <li>Enhance your property: Before we list any property we do a detailed evaluation of where things could be improved to maximize the viewing experience.</li>
              </ul>
            {/* </p> */}
          </div>
        </Col>
        <Col className=' col-lg-4 col-md-4 col-sm-6 cards' >
          <div className="tile-container">
            <h2>Presentation</h2>
            {/* <p> */}
              <ul>
                <li>We feature your property on a website (with floor plan, professional photographs & details) that exposes your property Nationally & Internationally to over 1 million visitors per month.</li>
                <li>We provide beautifully presented, factually accurate & informative fact-sheets to prospective renters.</li>
                <li>We have a personalized, professional website that solicits buyers from alternative sources & provides useful information.</li>
              </ul>
            {/* </p> */}
          </div>
        </Col>
      {/* </Row>

        
      <Row className='info-tile-row-2'> */}
        <Col className=' col-lg-4 col-md-4 col-sm-6 cards' >
          <div className="tile-container">
            <h2>Reach</h2>
            {/* <p> */}
              <ul>
                <li>We have strong, friendly relationships with the brokerage community to motivate them to show your property.</li>
                <li>We advertise regularly & wisely with strong, bold presence.</li>
                <li>Extensive media coverage</li>
                <li>Social Media: Over 30k followers on Instagram, Facebook & Twitter.</li>
              </ul>
            {/* </p> */}
          </div>
        </Col>
        <Col className=' col-lg-4 col-md-4 col-sm-6 cards' >
          <div className="tile-container">
            <h2>Communication</h2>
            {/* <p> */}
              <ul>
                <li>We communicate immediately with all top brokers to expose your property to the brokerage community (over 150 firms) via email AND phone.</li>
                <li>We communicate with brokers who have similar listings, so that they are clearly aware of comparable alternatives to their properties.</li>
                <li>We keep you up-to-date with the latest market condition, provide you with frequent feedback and work with you to determine the best strategy to obtain the highest price for your home.</li>
              </ul>
            {/* </p> */}
          </div>
        </Col>
        <Col className=' col-lg-4 col-md-4 col-sm-6 cards' >
          <div className="tile-container">
            <h2>Technology</h2>
            {/* <p> */}
              <ul>
                <li>Compass brings a modern approach to all aspects of the real estate business. We are creating leading technology, which enables a faster, easier and more data-driven real estate process.</li>
                <li>Tools-On-The-Go: We’ve built tools on both desktop and mobile that allow you to manage your whole search in one place.</li>
                <li>Superior Search: Our search and communications system is well-designed and easy to use.</li>
                <li>Data: We’re building distinctive market research tools based on one of the most comprehensive and accurate real estate databases in the industry.</li>
              </ul>
            {/* </p> */}
          </div>
        </Col>
      </Row>

      </Container>
    </div>
  )
}

export default InfoTiles
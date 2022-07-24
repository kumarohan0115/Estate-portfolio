import React from 'react'
import '../Resourses/Contact.css'
import logo from '../Assets/logo.png'
const Contact = () => {
  return (
    <div>
        <section className="contact-main">
            <img src="https://theleonardsteinbergteam.com/wp-content/uploads/2015/06/Donna-Dotan_0058-Final-copy-2-1920x1103.jpg" alt="" />
            <div className="overlay">
                <h1>Contact</h1>
                <div className="detail">
                    <a href="/"><h1>COMPASS</h1></a>
                    <p>Equal Housing Opportunity</p>
                    <p>Fair Housing Notice</p>
                    <p>New York Real Estate Standard Operating Procedures</p>
                </div>
                <img src={logo} alt="Real Estate Logo" />
                <div className="address">
                    <h1>Address</h1>
                    <pre>
                        <p>New York, NY 10011</p>
                        <p>90 Fifth Avenue</p>
                        <p>---------------------</p>
                        <p>111 Fifth Aveue </p>
                        <p>New York, NY 10003</p>
                    </pre>
                </div>

                <div className="contact-number">
                    <h1>Call Us</h1>
                    <p>+1-XXXXXXXXXX</p>
                    <h1>Email Us</h1>
                    <span>Email: real.estate@res.com</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
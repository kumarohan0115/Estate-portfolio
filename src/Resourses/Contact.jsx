import React from 'react'
import '../Resourses/Contact.css'
import logo from '../Assets/logo.png'
const Contact = () => {
    return (
        <>
            <section className="contact-main">
                <img src="https://theleonardsteinbergteam.com/wp-content/uploads/2015/06/Donna-Dotan_0058-Final-copy-2-1920x1103.jpg" alt="" />
                <div className="overlay">
                    <h2>Contact</h2>
                    <div className="detail">
                        <h2>COMPASS</h2>
                        <p>Equal Housing Opportunity</p>
                        <p>Fair Housing Notice</p>
                        <p>New York Real Estate Standard Operating Procedures</p>
                    </div>
                    <img src={logo} alt="Real Estate Logo" />
                    <div className="address">
                        <h2>Address</h2>
                        <div className='address-details'>
                            <span>
                                <p>New York, NY 10011</p>
                                <p>90 Fifth Avenue</p>
                            </span>
                            <span>
                                <p>111 Fifth Aveue </p>
                                <p>New York, NY 10003</p>
                            </span>
                        </div>
                    </div>

                    <div className="contact-number">
                        <h2>Call Us</h2>
                        <p>+1-XXXXXXXXXX</p>
                        <h2>Email Us</h2>
                        <span>Email: real.estate@res.com</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
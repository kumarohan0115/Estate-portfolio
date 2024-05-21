import React from 'react'
import './Footer.css'
const Footer = () => {

  const footerItem = ['Listing', 'Recourses', 'Luxury', 'LuxuryBlurb', 'Press', 'Contact Us']
  // const resoursesDrops = ['New Dev', 'Buying', 'Selling', 'Market Report']

  return (
    <div className='footer-main'>
        <div className="footer-items">
          <ul>
            {footerItem.map((item, index) => <li key={index}><a href="/">{item}</a></li>)}
          </ul>
        </div>

        <div className="brief-about">
          <p>
            The Leonard Steinberg Team is a team of real estate agents affiliated with Compass. Compass is a licensed real estate broker and abides by Equal Housing Opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to the accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.
          </p>

          <br />
          <a href="/">Fair Housing Notice</a>
          <br />
          <a href="/">New York Real Estate Standard Operating Procedures</a>
        </div>
        {/* <li ><a href="/">Resourses</a>
        <ul id='resourses-drops'>
          {
            resoursesDrops.map((ele,i)=>{
              return <li key={i}><a href="/">{ele}</a></li>
            })
          }
        </ul>
        </li> */}
    </div>

  )
}

export default Footer
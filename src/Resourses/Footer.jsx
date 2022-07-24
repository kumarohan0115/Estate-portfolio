import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-items">
          <ul>
            <li><a href="/">Listing</a></li>
            <li ><a href="/">Resourses</a>
            <ul id='resourses-drops'>
                <li><a href="/">New Dev</a></li>
                <li><a href="/">Buying</a></li>
                <li><a href="/">Selling</a></li>
                <li><a href="/">Market Report</a></li>
            </ul>
            </li>
            <li><a href="/">Luxary</a></li>
            <li><a href="/">LuxuryBlurb</a></li>
            <li><a href="/">Press</a></li>
            <li><a href="/">Contact Us</a></li>
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
      </footer>
    </div>
  )
}

export default Footer
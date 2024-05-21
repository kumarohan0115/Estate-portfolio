import React,{useEffect} from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'
const Navbar = () => {


  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth<=650)
      document.getElementById('navItemList').style.display='none'
    else{
      document.getElementById('navItemList').style.display='block'
    }
    console.log(window.innerWidth)
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">
          <img id='logo' src={logo} alt="Real Estate Logo" />
          <h2>eState</h2>
        </div>

        {
          <div className="Navlist" id='navItemList'>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Listing</a></li>
              <li><a href="/">Recourses</a></li>
              <li><a href="/">Luxury</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
        }
      </nav>
    </div>
  )
}

export default Navbar
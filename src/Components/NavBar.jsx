import React from 'react'
import enactus_img from '../enactus.png';


function NavBar() {
    return (
      <>
        <nav>
            <div className="enactus-logo">
            <img src={enactus_img} alt="Enactus" height='40' />
            <h1 id="enactus">enactus</h1>
            {/* <div className='iitm'>Indian Institute of Technology Madras</div> */}
            </div>

            <ul className='nav-list'>
                <li>Popular Categories | </li>
                <li>&nbsp;Collections | </li>
                <li>&nbsp;Blogs | </li>
                <li>&nbsp;Account | </li>
                <li>&nbsp;Contact Us</li>
            </ul>

            <div className="search-bar">
                <input placeholder="" className="input-search"/>
                <div className='search'>Search</div>
            </div>

        </nav>
      </>
    );
  }
  
  export default NavBar;
  
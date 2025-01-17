import React from 'react'

/** Navigation bar component entailing contact, about, etc */

function Navbar() {
  return (
    <div className='nav justify-content-center'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light '>
        <div className="navbar navbar-light">
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href="#home" onClick={() => { }} >
                <span className="sr-only">HOME</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href="#about" onClick={() => { }} >
                <span className="label">ABOUT US</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href="#education" onClick={() => { }} >
                <span className="label">EDUCATIONAL TIPS</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href="#contact" onClick={() => { }} >
                <span className="label">CONTACT US</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
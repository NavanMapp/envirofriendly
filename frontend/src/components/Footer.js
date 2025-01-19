import React from 'react';
import githubImg from '../images/github.png';
import linkedInImg from '../images/linkedin.png';

function Footer() {
  return (
    <footer className='bg-success text-black py-4'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-4'>
            <p className='h4 text-black'>🌍 Let's Make the Earth Greener Together! ♻️</p>
            <p>Join the recycling revolution and make a difference today!</p>
          </div>

          <div className='col-md-4'>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li><a href='#about' className='text-black text-decoration-none'>About Us</a></li>
              <li><a href='#contact' className='text-black text-decoration-none'>Contact</a></li>
              <li><a href='#terms' className='text-black text-decoration-none'>Terms of Service</a></li>
              <li><a href='#privacy' className='text-black text-decoration-none'>Privacy Policy</a></li>
            </ul>
          </div>

          <div className='col-md-4'>
            <h5>Follow Us</h5>
            <div className='d-flex'>
              <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                href="https://github.com/NavanMapp?tab=repositories" role="tab" aria-controls="messages">
                <img src={githubImg} className="icon github-icon" />
                <span className="label">Github</span>
              </a>
              <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                href="https://www.linkedin.com/in/navan-maphalala-65a2b314a/" role="tab" aria-controls="messages">
                <img src={linkedInImg} className="icon github-icon" />
                <span className="label">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className='text-center mt-4'>
          <p>© 2025 EnviroFriendly | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

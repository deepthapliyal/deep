import React from 'react';
import myImage from '../img/icon1.svg';
import myImage2 from '../img/icon2.svg';
import myImage3 from '../img/icon3.svg';
import myImage4 from '../img/icon4.svg';

const Footer = () => {
  return (
    <section id='contact'>

    <footer className='footer'>
       <div className="social">
       <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>

        <div className='contect-me'>Contact me Email : <span className='email'>deepakthapliyal47@gmail.com</span></div>
        <div className="socialIcon">
        <div className="socialimg">
  

        <li><img src={myImage} alt="My Image" style={{ width: '50px', height: '50px' }} /></li>
        <li><img src={myImage2} alt="My Image" style={{ width: '50px', height: '50px' }} /></li>
        <li><img src={myImage3} alt="My Image" style={{ width: '50px', height: '50px' }} /></li>
        <li><img src={myImage4} alt="My Image" style={{ width: '50px', height: '50px' }} /></li>
    
        </div>
        </div>
       </div>
      <div className='follow'>helpful links</div>
      <div className='copyright'>© 2023 deep.io . All rights reserved</div>
    </footer>
    </section>
  );
};

export default Footer;

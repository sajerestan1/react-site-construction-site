import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className='footer wow fadeIn' data-wow-delay='0.3s'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-3'>
              <div className='footer-contact'>
                <h2>Office Contact</h2>
                <p>
                  <i className='fa fa-map-marker-alt'></i>28 Newtown, Kimbolton,
                  Huntingdon. Cambridgeshire. PE280HY
                </p>
                <p>
                  <i className='fa fa-phone-alt'></i>+012 345 67890
                </p>
                <p>
                  <i className='fa fa-envelope'></i>info@lagercoast.co.uk
                </p>
                <div className='footer-social'>
                  <a href='about.html'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='about.html'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='about.html'>
                    <i className='fab fa-youtube'></i>
                  </a>
                  <a href='about.html'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a href='about.html'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='footer-link'>
                <h2>Services Areas</h2>
                <a href='about.html'>Building Construction</a>
                <a href='about.html'>House Renovation</a>
                <a href='about.html'>Architecture Design</a>
                <a href='about.html'>Interior Design</a>
                <a href='about.html'>Painting</a>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='footer-link'>
                <h2>Useful Pages</h2>
                <a href='about.html'>About Us</a>
                <a href='contact.html'>Contact Us</a>
                <a href='term.html'>Our Team</a>
                <a href='project.html'>Projects</a>
                <a href='testi.html'>Testimonial</a>
              </div>
            </div>
            <div className='col-md-6 col-lg-3'>
              <div className='newsletter'>
                <h2>Newsletter</h2>
                <p>
                  As a valued customer, we believe that you would benefit
                  greatly from our newsletter, and we would love to have you
                  join us. To subscribe, simply visit our website and fill out
                  the subscription form. It's quick and easy, and you'll start
                  receiving our newsletter right away.
                </p>
                <div className='form'>
                  <input className='form-control' placeholder='Email here' />
                  <button className='btn'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container footer-menu'>
          <div className='f-menu'>
            <a href='term.html'>Terms of use</a>
            <a href='policy.html'>Privacy policy</a>
            <a href='cookies.html'>Cookies</a>
            <a href='help.html'>Help</a>
            <a href='faqs.html'>FQAs</a>
          </div>
        </div>
        <div className='container copyright'>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                &copy; <a href='#home'>LargerCoast</a>, All Right Reserved.
              </p>
            </div>

            <div className='col-md-6'>
              <p>
                Designed By <a href='https://omaz.com.ng'>Omaz Creative</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href='#home' className='back-to-top'>
          <i className='fa fa-chevron-up'></i>
        </a>
      </div>
    </>
  );
}

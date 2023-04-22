import React from 'react';
import aboutimg from '../img/about.jpg';
export const About = () => {
  return (
    <div className='about wow fadeInUp' data-wow-delay='0.1s'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-5 col-md-6'>
            <div className='about-img'>
              <img src={aboutimg} alt='Image' />
            </div>
          </div>
          <div className='col-lg-7 col-md-6'>
            <div className='section-header text-left'>
              <p>Welcome to LagerCoast</p>
              <h2>Celebrating 5 Years of Excellence</h2>
            </div>
            <div className='about-text'>
              <p>
                As we mark our 5th year in the industry, we at Larger Coast are
                proud to look back on our journey and celebrate the milestones
                we have achieved.
              </p>
              <p>
                Over the past 5 years, we have grown from a small startup to a
                leading provider of Building Construction, House Renovation,
                Architecture Design, Interior Design, Fixing & Support, and
                Painting. We have had the pleasure of working with a diverse
                range of clients, from small businesses to large corporations,
                and have consistently delivered exceptional results that have
                earned us a reputation for excellence.
              </p>
              <a className='btn' href='about.html'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { serviceinfo } from './data';


export const Service = () => {
  return (
    <div className='service'>
      <div className='container'>
        <div className='section-header text-center'>
          <p>Our Services</p>
          <h2>We Provide Services</h2>
        </div>
        <div className='row'>
          {serviceinfo.map((info)=> {
            const {id, img, text, title} = info
            return (
              <>
                <div
                  className='col-lg-4 col-md-6 wow fadeInUp'
                  data-wow-delay='0.1s'
                key={id}>
                  <div className='service-item'>
                    <div className='service-img'>
                      <img src={img} alt='' />
                      <div className='service-overlay'>
                        <p>
                          {text}
                        </p>
                      </div>
                    </div>
                    <div className='service-text'>
                      <h3>{title}</h3>
                      <a
                        className='btn'
                        href='img/service-1.jpg'
                        data-lightbox='service'
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import {test} from './data'
export const Testimonial = () => {
  return (
    <div className='testimonial wow fadeIn' data-wow-delay='0.1s'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {test.map((data) => {
              const { name, id, img, text, job } = data;
              return (
                <>
                  <div className='testimonial-slider-nav' key={id}>
                    <div class='slider-nav'>
                      <img src={img} alt='Testimonial' />
                    </div>
                    
                    <div class='row'>
                      <div class='col-12'>
                        <div class='testimonial-slider'>
                          <div class='slider-item'>
                            <h3>{name}</h3>
                            <h4>{job}</h4>
                            <p>{text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
}

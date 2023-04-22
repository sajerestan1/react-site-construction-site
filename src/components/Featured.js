import React from 'react'

export const Featured = () => {
  return (
    <div className='feature wow fadeInUp' data-wow-delay='0.1s'>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-lg-4 col-md-12'>
            <div className='feature-item'>
              <div className='feature-icon'>
                <i className='flaticon-worker'></i>
              </div>
              <div className='feature-text'>
                <h3>Expert Worker</h3>
                <p>
                  We are also committed to providing exceptional customer
                  service.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12'>
            <div className='feature-item'>
              <div className='feature-icon'>
                <i className='flaticon-building'></i>
              </div>
              <div className='feature-text'>
                <h3>Quality Work</h3>
                <p>
                  e pride ourselves on delivering high-quality work to all of
                  our clients.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12'>
            <div className='feature-item'>
              <div className='feature-icon'>
                <i className='flaticon-call'></i>
              </div>
              <div className='feature-text'>
                <h3>24/7 Support</h3>
                <p>
                  We are committed to being available to our clients around the
                  clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

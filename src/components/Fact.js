import React from 'react'

export const Fact = () => {
  return (
    <div className='fact'>
      <div className='container-fluid'>
        <div className='row counters'>
          <div className='col-md-6 fact-left wow slideInLeft'>
            <div className='row'>
              <div className='col-6'>
                <div className='fact-icon'>
                  <i className='flaticon-worker'></i>
                </div>
                <div className='fact-text'>
                  <h2 data-toggle='counter-up'>10</h2>
                  <p>Expert Workers</p>
                </div>
              </div>
              <div className='col-6'>
                <div className='fact-icon'>
                  <i className='flaticon-building'></i>
                </div>
                <div className='fact-text'>
                  <h2 data-toggle='counter-up'>48</h2>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 fact-right wow slideInRight'>
            <div className='row'>
              <div className='col-6'>
                <div className='fact-icon'>
                  <i className='flaticon-address'></i>
                </div>
                <div className='fact-text'>
                  <h2 data-toggle='counter-up'>89</h2>
                  <p>Completed Projects</p>
                </div>
              </div>
              <div className='col-6'>
                <div className='fact-icon'>
                  <i className='flaticon-crane'></i>
                </div>
                <div className='fact-text'>
                  <h2 data-toggle='counter-up'>20</h2>
                  <p>Running Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

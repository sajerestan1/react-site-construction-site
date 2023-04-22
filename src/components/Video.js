import React from 'react'

export const Video = () => {
  return (<>
   <div className='video wow fadeIn' data-wow-delay='0.1s'>
          <div className='container'>
            <button
              type='button'
              className='btn-play'
              data-toggle='modal'
              data-src='https://www.youtube.com/embed/DWRcNpR6Kdc'
              data-target='#videoModal'
            >
              <span></span>
            </button>
          </div>
        </div>

        <div
          className='modal fade'
          id='videoModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-body'>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
                {/* <!-- 16:9 aspect ratio --> */}
                <div className='embed-responsive embed-responsive-16by9'>
                  <iframe
                    className='embed-responsive-item'
                    src=''
                    id='video'
                    allowscriptaccess='always'
                    allow='autoplay'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
  )
}

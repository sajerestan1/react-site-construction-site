import React from 'react'
import blog1 from '../img/blog-1.jpg';
import blog2 from '../img/blog-2.jpg';
import blog3 from '../img/blog-3.jpg';

export const Blog = () => {
  return (
    <div className='blog'>
      <div className='container'>
        <div className='section-header text-center'>
          <p>Latest Blog</p>
          <h2>Latest From Our Blog</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6 wow fadeInUp' data-wow-delay='0.2s'>
            <div className='blog-item'>
              <div className='blog-img'>
                <img src={blog1} alt='Image' />
              </div>
              <div className='blog-title'>
                <h3>Lorem ipsum dolor sit</h3>
                <a className='btn' href=''>
                  +
                </a>
              </div>
              <div className='blog-meta'>
                <p>
                  By<a href=''>Admin</a>
                </p>
                <p>
                  In<a href=''>Construction</a>
                </p>
              </div>
              <div className='blog-text'>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 wow fadeInUp'>
            <div className='blog-item'>
              <div className='blog-img'>
                <img src={blog2} alt='Image' />
              </div>
              <div className='blog-title'>
                <h3>Lorem ipsum dolor sit</h3>
                <a className='btn' href=''>
                  +
                </a>
              </div>
              <div className='blog-meta'>
                <p>
                  By<a href=''>Admin</a>
                </p>
                <p>
                  In<a href=''>Construction</a>
                </p>
              </div>
              <div className='blog-text'>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 wow fadeInUp' data-wow-delay='0.2s'>
            <div className='blog-item'>
              <div className='blog-img'>
                <img src={blog3} alt='Image' />
              </div>
              <div className='blog-title'>
                <h3>Lorem ipsum dolor sit</h3>
                <a className='btn' href=''>
                  +
                </a>
              </div>
              <div className='blog-meta'>
                <p>
                  By<a href=''>Admin</a>
                </p>
                <p>
                  In<a href=''>Construction</a>
                </p>
              </div>
              <div className='blog-text'>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

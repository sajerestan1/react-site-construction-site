import React from 'react'
import { faqsleft, faqsright } from './data';

export const Faqs = () => {
  return (
    <div className='faqs'>
      <div className='container'>
        <div className='section-header text-center'>
          <p>Frequently Asked Question</p>
          <h2>You May Ask</h2>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div id='accordion-1'>
              {faqsleft.map((left)=> {
                const {id, text, title, time, collapse, href } = left
                return (
                  <>
                    <div className='card wow fadeInLeft' data-wow-delay={time} key={id}>
                      <div className='card-header'>
                        <a
                          className='card-link collapsed'
                          data-toggle='collapse'
                          href= {href}
                        >
                         {title}
                        </a>
                      </div>
                      <div
                        id={collapse}
                        className='collapse'
                        data-parent='#accordion-1'
                      >
                        <div className='card-body'>
                          {text}
                        </div>
                      </div>
                    </div>
                  </>
                );

              })}
              
              </div>
              </div>
          <div className='col-md-6'>
            <div id='accordion-2'>
             {faqsright.map((right)=> {
              const {id, text, title, time, collapse, href} = right
              return (
                <>
                  <div className='card wow fadeInRight' data-wow-delay={time} key={id}>
                    <div className='card-header'>
                      <a
                        className='card-link collapsed'
                        data-toggle='collapse'
                        href={href}
                      >
                       {title}
                      </a>
                    </div>
                    <div
                      id={collapse}
                      className='collapse'
                      data-parent='#accordion-2'
                    >
                      <div className='card-body'>
                        {text}
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
    </div>
  );
}

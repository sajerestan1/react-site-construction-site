import React from 'react'
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import team4 from '../img/team-4.jpg';
export const Team = () => {
  return (
    <div className='team'>
      <div className='container'>
        <div className='section-header text-center'>
          <p>Our Team</p>
          <h2>Meet Our Engineer</h2>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>
            <div className='team-item'>
              <div className='team-img'>
                <img src={team1} alt='Team Image' />
              </div>
              <div className='team-text'>
                <h2>Adam Phillips</h2>
                <p>CEO & Founder</p>
              </div>
              <div className='team-social'>
                <a className='social-tw' href=''>
                  <i className='fab fa-twitter'></i>
                </a>
                <a className='social-fb' href=''>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a className='social-li' href=''>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a className='social-in' href=''>
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.2s'>
            <div className='team-item'>
              <div className='team-img'>
                <img src={team2} alt='Team Image' />
              </div>
              <div className='team-text'>
                <h2>Dylan Adams</h2>
                <p>Civil Engineer</p>
              </div>
              <div className='team-social'>
                <a className='social-tw' href=''>
                  <i className='fab fa-twitter'></i>
                </a>
                <a className='social-fb' href=''>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a className='social-li' href=''>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a className='social-in' href=''>
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.3s'>
            <div className='team-item'>
              <div className='team-img'>
                <img src={ team3 } alt='Team Image' />
              </div>
              <div className='team-text'>
                <h2>Jhon Doe</h2>
                <p>Interior Designer</p>
              </div>
              <div className='team-social'>
                <a className='social-tw' href=''>
                  <i className='fab fa-twitter'></i>
                </a>
                <a className='social-fb' href=''>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a className='social-li' href=''>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a className='social-in' href=''>
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 wow fadeInUp' data-wow-delay='0.4s'>
            <div className='team-item'>
              <div className='team-img'>
                <img src={team4} alt='Team Image' />
              </div>
              <div className='team-text'>
                <h2>Josh Dunn</h2>
                <p>Painter</p>
              </div>
              <div className='team-social'>
                <a className='social-tw' href=''>
                  <i className='fab fa-twitter'></i>
                </a>
                <a className='social-fb' href=''>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a className='social-li' href=''>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a className='social-in' href=''>
                  <i className='fab fa-instagram'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const inputProps = {
  fluid: true,
  iconPosition: 'left',
  placeholder: 'Search for artists, scouts and more'
}

const AboutSection = () => (
  <div className='welcome-container'>
    <Container className='about'>
      <div className='ui two column grid'>
        <div className='column'>
          <Header size='huge' inverted>What is FanTank™</Header>
          <h3 className='subheader'><em>FanTank™ is the coolest new way in Arts & Entertainment for...</em></h3>
          <div className='ui list'>
            <div className='item'>
              <i className='star icon'></i>
              <div className='content'>
                Artists&nbsp;to get real time feedback &amp; analytics that is relevant to their art and to secure project financing.
              </div>
            </div>
            <div className='item'>
              <i className='star icon'></i>
              <div className='content'>
                Fans&nbsp;to explore and evaluate talent to build their scout score and to make money.
              </div>
            </div>
            <div className='item'>
              <i className='star icon'></i>
              <div className='content'>
                Industry&nbsp;to tap into the collective intelligence of the people during talent discovery that saves them time &amp; money.
              </div>
            </div>
            <div className='item'>
              <i className='star icon'></i>
              <div className='content'>
                Public to use our technologies to assist with making better informed equity crowd investment decisions on emerging talent.
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <iframe width='560' height='315' src='https://www.youtube.com/embed/ScMzIvxBSi4' frameBorder='0' allowFullScreen='' />
        </div>
      </div>
    </Container>
  </div>
)

export default AboutSection

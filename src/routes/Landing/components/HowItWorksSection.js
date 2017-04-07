import React from 'react'
import { Container, Image, Header, Divider, Modal, Popup, Button } from 'semantic-ui-react'
import { Link } from 'react-router'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import icon5 from './icon5.png'
import icon6 from './icon6.png'

const inputProps = {
  fluid: true,
  iconPosition: 'left',
  placeholder: 'Search for artists, scouts and more'
}

const modalTrigger1 = (
  <div className='column'>
    <Image width={100} height={100} centered src={icon2} />
    <Header textAlign='center' size='medium' inverted>I.T. Services &amp; Dashboards (Artists)</Header>
    <i className='large chevron circle right icon inverted' />
  </div>
)

const modalTrigger2 = (
  <div className='column'>
    <Image width={100} height={100} centered src={icon3} />
    <Header textAlign='center' size='medium' inverted>I.T. Services &amp; Dashboards (Scouts)</Header>
    <i className='large chevron circle right icon inverted' />
  </div>
)
const modalTrigger3 = (
  <div className='column'>
    <Image width={100} height={100} centered src={icon4} />
    <Header textAlign='center' size='medium' inverted>Social Networking &amp; Messaging</Header>
    <i className='large chevron circle right icon inverted' />
  </div>
)

const HowItWorksSection = () => (
  <div className='welcome-container'>
    <Container className='how-it-works'>
      <div className='ui one column grid centered'>
        <div className='column'>
          <Header size='huge' textAlign='center' inverted>How It Works</Header>
          <Divider hidden />
        </div>
      </div>
      <div className='ui six column grid'>
        <div className='column'>
          <Image width={100} height={100} centered src={icon1} />
          <Header size='medium' textAlign='center' inverted>Talent Search Technology</Header>
          <i className='large chevron circle right icon inverted' />
        </div>
        <Modal trigger={modalTrigger1} size='small' closeIcon='close'>
          <Modal.Content id='modal-artist'>
            <h5 className='ui header inverted'>I.T. Services &amp; Dashboards (Artists)</h5>
            <div style={{ width: '50%' }}>
              <p>
              FanTank’s I.T. Solutions for Artists is a central hub that monitors your content score trending and talent search engine ranking that is generated from the collective intelligence of voting data received from Fans, Educators, Industry, Media, Brands, Behind The Scenes, other artists, and more.  We measure the artistic pulse of the people and then fund your talent and dreams with no subjectivity!            <br /><br />
              </p>
              <div className='ui list bulleted'>
                <div className='item'>Buzz Maps - shows where you have the most appeal visually and geographically across the World</div>
                <div className='item'>Comparative Rankings to other artists</div>
                <div className='item'>Track your progress towards being transformed into a “mini IPO” using our equity crowd funding services.</div>
              </div>
            </div>
          </Modal.Content>
        </Modal>
        <Modal trigger={modalTrigger2} size='small' closeIcon='close'>
          <Modal.Content id='modal-scout'>
            <div style={{ width: '50%' }}>
              <h5 className='ui header inverted'>I.T. Services &amp; Dashboards (Scouts)</h5>
              <p>
                Do you have an eye to spot talent? With FanTank’s I.T. Solutions for Scouts we measure your skill at evaluating the next superstars.  Our scouting dashboard is your central hub that monitors and provides you with real time feedback and visualization on your scout score trending, scout ranking, badge levels, and more.  Influence your favorite art form(s) and emerging artists in a cool new way.
              </p>
              <ul className="list bulleted">
                <li>Build Your Scout Score</li>
                <li>Win Contests &amp; Promos</li>
                <li>Earn Badges</li>
                <li>Generate Income</li>
              </ul>
              <Link className='ui button primary small' to='/pricing'>Pricing</Link>
            </div>
          </Modal.Content>
        </Modal>
        <Modal trigger={modalTrigger3} size='small' closeIcon='close'>
          <Modal.Content id='modal-social'>
            <div style={{ padding: '100px' }}>
              <h5 className='ui header inverted'>Social Networking &amp; Messaging</h5>
              <p>
                Finally, a social networking platform that is engineered for people that have a passion for Arts & Entertainment.  Now you can connect, share, message, and build relationships with others across diverse user types, art forms, and genres in one place.
              </p>
            </div>
          </Modal.Content>
        </Modal>
        <div className='column'>
          <Image width={100} height={100} centered src={icon5} />
          <Header textAlign='center' size='medium' inverted>Digital Talent Scouting</Header>
          <i className='large chevron circle right icon inverted' />
        </div>
        <div className='column'>
          <Image width={100} height={100} centered src={icon6} />
          <Header textAlign='center' size='medium' inverted>Equity Crowd Funding</Header>
          <i className='large chevron circle right icon inverted' />
        </div>
      </div>
    </Container>
  </div>
)

export default HowItWorksSection

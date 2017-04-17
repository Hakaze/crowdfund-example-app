import React from 'react'
import { Image, Divider, Segment, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router'
import './Crowdfund.scss'
import fiona from './crowd/fiona2.png'
import kendrick from './crowd/kendrick2.png'
import chance from './crowd/chance2.png'
import karina from './crowd/karina.png'
import frank from './crowd/frankocean.png'
import whosnext from './crowd/whosnext.png'
import icon4 from './crowd/icon4.png'
import icon5 from './crowd/icon5.png'
import icon6 from './crowd/icon6.png'

const CrowdfundView = () => {
  return (
    <div className='ui one column centered grid'>
      <div className='column'>
        <div className='crowdfund-invest' />
        <h1 className='ui header inverted'>Passion Is Measurable</h1>
        <h3 className='ui header inverted'>
          Invest in the art and talent you believe in based upon the votes from the people as your guide.
        </h3>
        <Image className='crowdfund-card' centered src={fiona} />
        <Image className='crowdfund-card' centered src={kendrick} />
        <Image className='crowdfund-card' centered src={chance} />
        <Image className='crowdfund-card' centered src={karina} />
        <Image className='crowdfund-card' centered src={frank} />
        <Link to='/crowdfund/info'>
          <Image className='crowdfund-card' centered src={whosnext} />
        </Link>
        <Segment secondary inverted padded>
          <div className='ui three column centered padded grid'>
            <div className='column'>
              <Image centered src={icon4} />
              <Divider horizontal inverted section><h3>Art</h3></Divider>
              <p>Invest in the artists you believe in while potentially growing your wealth and
            a deeper connection with your favorite art forms</p>
            </div>
            <div className='column'>
              <Image centered src={icon5} />
              <Divider horizontal inverted section><h3>Measurement</h3></Divider>
              <p>FanTank measures the artistic pulse of the crowd that assists potential investors, distributors,
                 agents, fans, brand managers, and callaborators to find emerging talent</p>
            </div>
            <div className='column'>
              <Image centered src={icon6} />
              <Divider horizontal inverted section><h3>Investment</h3></Divider>
              <p>Investment opportunities are now open to everyone who has a passion for the Arts</p>
            </div>
            <div className='column'>
              <h2>Are you an Artrepreneur?</h2>
              <Divider inverted />
              <Link to='/crowdfund/info'>LEARN MORE</Link>
            </div>
          </div>
        </Segment>

        <Segment tertiary inverted padded>
          <div className='ui centered padded grid'>
            <div className='column'>
              <h2>Get access to the best emerging artists voted on by the crowd</h2>
              <span>Be the first to receive investment opportunities, straight to your inbox</span>
              <div style={{ margin: '2em 0' }}>
                <Input type='text' inverted placeholder='Your E-mail' />
              </div>
              <Button primary inverted>Submit</Button>
              <h1>Questions?</h1>
              <Link to='/crowdfund/info'>Visit Our FAQ</Link>
            </div>
          </div>
        </Segment>
      </div>
    </div>
  )
}

export default CrowdfundView

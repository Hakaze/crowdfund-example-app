import React from 'react'
import { Container, Image, Header, Divider } from 'semantic-ui-react'
import buzzMap from './map.png'
import { goTo } from 'util/location'

const inputProps = {
  fluid: true,
  iconPosition: 'left',
  placeholder: 'Search for artists, scouts and more'
}

const BuzzMap = () => (
  <div className='welcome-container'>
    <Container className='buzzmap'>
      <div className='ui two column grid'>
        <div className='column'>
          <h1 className='ui header inverted centered'>
            Music
            <div className='sub header inverted centered'>Buzzmap</div>
          </h1>
          <Divider hidden />
          <Image onClick={() => goTo('/music')} centered size='large' src={buzzMap} />
        </div>
        <div className='column'>
          <h1 className='ui header inverted centered'>
            Modeling
            <div className='sub header inverted centered'>Buzzmap</div>
          </h1>
          <Divider hidden />
          <Image onClick={() => goTo('/modeling')} centered size='large' src={buzzMap} />
        </div>
      </div>
    </Container>
  </div>
)

export default BuzzMap

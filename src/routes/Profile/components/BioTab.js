import React from 'react'
import { Segment, Statistic } from 'semantic-ui-react'

const BioTab = ({ profile }) => {
  return (
    <div>
      <div className='ui padded grid'>
        <div className='row'>
          <div className='twelve wide column'>
            <h2 className='ui header inverted'>Bio</h2>
            <h5 className='ui header orange'>About Me</h5>
            <p>{profile.bioAbout.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
            })}</p>
          </div>
          <div className='four wide center aligned column'>
            <Segment inverted>
              <Statistic size='tiny' inverted color='orange' value='240' label='page views' />
            </Segment>
          </div>
        </div>
        <div className='row'>
          <div className='fluid column'>
            <h5 className='ui header orange'>Interests</h5>
            <div>
              {profile.bioInterests.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
              })}
            </div>
          </div>
        </div>
        <div className='three column row'>
          <div className='column'>
            <h5 className='ui header orange'>Area Focus</h5>
            {profile.bioAreaFocus.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
            })}
          </div>
          <div className='column'>
            <h5 className='ui header orange'>Additional Skills</h5>
            <div>
              {profile.bioSkills.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
              })}
            </div>
          </div>
          <div className='column'>
            <h5 className='ui header orange'>General Stats</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

BioTab.propTypes = {
  profile: React.PropTypes.object.isRequired
}

export default BioTab

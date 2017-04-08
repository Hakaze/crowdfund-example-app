import React from 'react'
import { Segment, Image, Item, Label, Menu, Icon, Button, Statistic, Flag } from 'semantic-ui-react'
import './ProfileView.scss'

class ProfileView extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object.isRequired
  }

  state = {
    activeItem: 'bio'
  }

  setActive = (item) => {
    this.setState({
      activeItem: item
    })
  }

  render () {
    const { profile } = this.props
    const { activeItem } = this.state
    const headerStyle = {
      backgroundImage: `url(${profile.coverPhoto})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '372px'
    }
    return (
      <div className='ui one column grid'>
        <div className='column'>
          <Segment.Group>
            <Segment inverted style={headerStyle} raised id='profile-header'>
              <Label className='hud-style' corner='left' size='medium' color='green' icon='dollar' />
              <div className='ui grid'>
                <div className='six wide column'>
                  <Image height={120} width={120} bordered shape='circular' src={profile.avatar} />
                  <Item>
                    <Item.Content>
                      <Label className='hud-style' size='small' attached='bottom' image color='black'>
                        <Flag name='us' />
                        Los Angeles, CA
                      </Label>
                      <h5 className='stage-name'>{profile.stageName}</h5>
                      <Item.Meta>
                        <Label className='hud-style' ribbon size='small' color='black' style={{ marginBottom: '10px' }}>
                          <Statistic size='mini' inverted color='green'>
                            <Statistic.Value>
                              7,999&nbsp;
                              <Icon name='arrow circle outline up' />
                            </Statistic.Value>
                            <Statistic.Label style={{ marginTop: '4px' }}>Scout Score</Statistic.Label>
                          </Statistic>
                          <Statistic size='mini' inverted color='red'>
                            <Statistic.Value>
                              8,777&nbsp;
                              <Icon name='arrow circle outline down' />
                            </Statistic.Value>
                            <Statistic.Label style={{ marginTop: '4px' }}>Content Score</Statistic.Label>
                          </Statistic>
                        </Label>
                      </Item.Meta>
                      <Item.Extra>
                        <h3 className='ui relaxed header inverted'>Music Artist - Vocalist
                          <div className='sub header'>
                            Jazz | Blues | Opera
                          </div>
                        </h3>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </div>
                <div className='ten wide column'>
                  <Label className='hud-style' attached='top right' size='mini' color='black' style={{ marginBottom: '10px' }}>
                    <Menu borderless pointing secondary inverted size='mini'>
                      <Menu.Item name='find' onClick={() => console.log('hi')}>
                        <Icon align='left' name='find' /> Track
                      </Menu.Item>
                      <Menu.Item name='message' onClick={() => console.log('hi')}>
                        <Icon name='talk' /> Message
                      </Menu.Item>
                      <Menu.Item name='friend' onClick={() => console.log('hi')}>
                        <Icon name='add user' /> Friend
                      </Menu.Item>
                    </Menu>
                  </Label>
                </div>
              </div>
            </Segment>
            <Segment pilled color='black' inverted>
              <Menu inverted pointing color='blue' secondary size='medium'>
                <Menu.Item
                  name='Bio'
                  active={activeItem === 'bio' }
                  onClick={() => this.setActive('bio')} />
                <Menu.Item
                  name='Content Score'
                  active={activeItem === 'content_score' }
                  onClick={() => this.setActive('content_score')} />
                <Menu.Item
                  name='Scout Score'
                  active={activeItem === 'scout_score' }
                  onClick={() => this.setActive('scout_score')} />
                <Menu.Item
                  name='Content'
                  active={activeItem === 'content' }
                  onClick={() => this.setActive('content')} />
              </Menu>
            </Segment>
          </Segment.Group>
        </div>
      </div>
    )
  }
}

ProfileView.propTypes = {}

export default ProfileView

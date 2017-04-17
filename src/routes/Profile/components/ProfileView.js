import React from 'react'
import {
  Segment, Image, Item, Label, Menu, Icon, Dimmer, Statistic, Flag
} from 'semantic-ui-react'
import './ProfileView.scss'
import tastemaker from './badges/tastemaker.png'
import influencer from './badges/influencer.png'
import connector from './badges/connector.png'
import talentScout from './badges/talentscout.png'
import guru from './badges/guru.png'
import artrepreneur from './badges/artrepreneur.png'
import mogul from './badges/mogul.png'
import trendsetter from './badges/trendsetter.png'
import maven from './badges/maven.png'

class ProfileView extends React.Component {
  static propTypes = {
    profile: React.PropTypes.object.isRequired
  }

  state = {
    activeItem: 'bio',
    badgePane: false
  }

  setActive = (item) => {
    this.setState({
      activeItem: item
    })
  }

  toggleBadges = () => {
    this.setState({
      badgePane: !this.state.badgePane
    })
  }

  renderBio = () => {
    const { profile } = this.props
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
  render () {
    const { profile } = this.props
    const { activeItem, badgePane } = this.state
    const headerStyle = {
      backgroundImage: `url(${profile.coverPhoto})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '372px'
    }
    let content
    switch (activeItem) {
      case 'bio':
        content = this.renderBio()
      break
      case 'contentScore':
      break
    }
    return (
      <div className='ui one column grid'>
        <div className='column'>
          <Segment.Group>
            <Dimmer.Dimmable
              as={Segment}
              blurring
              dimmed={badgePane}
              inverted
              style={headerStyle}
              raised
              id='profile-header'
            >
              <Dimmer active={badgePane} onClickOutside={this.toggleBadges}>
                <div className='ui two column grid'>
                  <div className='ten wide column'>
                    <h4>Collected Badges</h4>
                    <div className='badges-overlay'>
                      <div className='badge'>
                        <Image src={influencer} centered />
                        <h5>Influencer</h5>
                      </div>
                      <div className='badge'>
                        <Image src={connector} centered />
                        <h5>Connector</h5>
                      </div>
                      <div className='badge'>
                        <Image src={tastemaker} centered />
                        <h5>Tastemaker</h5>
                      </div>
                      <div className='badge inactive'>
                        <Image src={talentScout} centered />
                        <h5>Talent Scout</h5>
                      </div>
                      <div className='badge inactive'>
                        <Image src={guru} centered />
                        <h5>Guru</h5>
                      </div>
                      <div className='badge inactive'>
                        <Image src={artrepreneur} centered />
                        <h5>Artrepreneur</h5>
                      </div>
                      <div className='badge inactive'>
                        <Image src={mogul} centered />
                        <h5>Mogul</h5>
                      </div>
                    </div>
                  </div>
                  <div className='six wide column stretched'>
                    <div className='dim-closer'>
                      <Icon link size='large' inverted name='close' onClick={() => this.toggleBadges()} />
                    </div>
                    <div style={{ borderLeft: '1px solid #727272'}}>
                      <h4>Bonus Badges</h4>
                      <div className='badges-overlay'>
                        <div className='badge inactive'>
                          <Image src={trendsetter} centered />
                          <h5>Trendsetter</h5>
                        </div>
                        <div className='badge inactive'>
                          <Image src={maven} centered />
                          <h5>Maven</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dimmer>
              <Label className='hud-style' corner='left' size='medium' color='green' icon='dollar' />
              <div className='ui grid'>
                <div className='six wide column'>
                  <Image height={120} width={120} bordered shape='circular' src={profile.profilePicture} />
                  <Item>
                    <Item.Content>
                      <Label className='hud-style' size='small' attached='bottom' image color='black'>
                        <Flag name='us' />
                        {profile.location}
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
                        <h3 className='ui relaxed header inverted'>
                          {profile.artForm} {profile.accountType} - {profile.artFormType}
                          <div className='sub header'>
                            {profile.primaryGenre} - {profile.otherGenres}
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
                        <Icon name='find' /> Track
                      </Menu.Item>
                      <Menu.Item name='message' onClick={() => console.log('hi')}>
                        <Icon name='talk' /> Message
                      </Menu.Item>
                      <Menu.Item name='friend' onClick={() => console.log('hi')}>
                        <Icon name='add user' /> Friend
                      </Menu.Item>
                    </Menu>
                  </Label>
                  <div className='badges'>
                    <div className='badge'>
                      <a onClick={() => this.toggleBadges()} className='hvr-ripple-out'>
                        <Image centered src={tastemaker} />
                      </a>
                      <span className='subheader'>Badge Level</span>
                      <h5>Tastemaker</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Dimmer.Dimmable>
            <Segment color='black' inverted>
              <Menu inverted pointing secondary size='huge'>
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
                <Menu.Item>
                  <span style={{ color: '#2185D0', margin: 0 }}>240</span>
                  <Icon color='blue' name='linkify' style={{ marginLeft: '4px' }} />
                </Menu.Item>
              </Menu>
            </Segment>
            <Segment color='black' inverted>
              {content}
            </Segment>
          </Segment.Group>
        </div>
      </div>
    )
  }
}

ProfileView.propTypes = {}

export default ProfileView

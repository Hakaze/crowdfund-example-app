import React, { Component, PropTypes } from 'react'
import {
  Segment, Image, Item, Label, Menu, Icon, Dimmer, Statistic, Flag
} from 'semantic-ui-react'
import './ProfileView.scss'
import ContentTab from './ContentTab'
import BioTab from './BioTab'
import ContentScore from './ContentScore'
import ScoutScore from './ScoutScore'
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
    profile: PropTypes.object.isRequired,
    music: PropTypes.object,
    photos: PropTypes.object,
    videos: PropTypes.object
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

  renderContent = () => {
    const { profile, music, photos, videos } = this.props
    return (
      <ContentTab {...{ user: profile, music, videos, photos }} />
    )
  }

  renderBio = () => {
    const { profile } = this.props
    return (
      <BioTab {...{ profile }} />
    )
  }

  renderContentScore = () => {
    return <ContentScore />
  }

  renderScoutScore = () => {
    return <ScoutScore />
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
    const paneContent = {
      bio: this.renderBio
    }
    if (profile.accountType === 'Artist') {
      paneContent.content = this.renderContent
      paneContent['scout score'] = this.renderScoutScore
      paneContent['content score'] = this.renderContentScore
    }
    const menuItems = () => {
      let items = []
      for (let key in paneContent) {
        items.push(
          <Menu.Item key={key} name={key} active={activeItem === key} onClick={() => this.setActive(key)} />
        )
      }
      return items
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
                      <h5 className='stage-name'>{profile.stageName || `${profile.firstName} ${profile.lastName}` }</h5>
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
                          {profile.artForm} {profile.accountType} - {profile.artFormType || profile.userType}
                          <div className='sub header'>
                            {profile.primaryGenre || profile.primaryModelType} - {profile.otherGenres || profile.otherModelTypes}
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
                {menuItems()}
                <Menu.Item key='connections'>
                  <span style={{ color: '#2185D0', margin: 0 }}>240</span>
                  <Icon color='blue' name='linkify' style={{ marginLeft: '4px' }} />
                </Menu.Item>
              </Menu>
            </Segment>
            <Segment color='black' inverted>
              {paneContent[activeItem]()}
            </Segment>
          </Segment.Group>
        </div>
      </div>
    )
  }
}

export default ProfileView

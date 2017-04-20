import React, { Component, PropTypes } from 'react'
import {
  Segment, Image, Embed, Button, Menu, Icon, Card
} from 'semantic-ui-react'

class ContentTab extends Component {
  static propTypes = {
    photos: PropTypes.object,
    music: PropTypes.object,
    videos: PropTypes.object,
    user: PropTypes.object
  }

  state = {
    activeItem: 'photos'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderPhotos = () => {
    const { photos } = this.props
    return (
      <div className='ui grid'>
        <div className='two column row'>
          {photos.toList().toJS().map((p, k) => (
            <div className='column stretched' key={k}>
              <Card>
                <Card.Content>
                  <Image src={p.location} />
                </Card.Content>
                <Card.Content extra>
                  30 <Icon name='commenting' />
                  250 <Icon name='eye' />
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderVideos = () => {
    const { videos } = this.props
    return (
      <div className='ui grid'>
        <div className='two column row'>
          {videos.toList().toJS().map((p, k) => (
            <div className='column stretched' key={k}>
              <Card>
                <Card.Content>
                  <Embed id={p.link} source='vimeo' />
                </Card.Content>
                <Card.Content extra>
                  30 <Icon name='commenting' />
                  250 <Icon name='eye' />
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderMusic = () => {
    const { music } = this.props
    return (
      <div className='ui grid'>
        <div className='two column row'>
          {music.toList().toJS().map((p, k) => (
            <div className='column stretched' key={k}>
              <Card>
                <Card.Content>
                  <Embed url={p.location} />
                </Card.Content>
                <Card.Content extra>
                  30 <Icon name='commenting' />
                  250 <Icon name='eye' />
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </div>
    )
  }

  render () {
    const { user } = this.props
    const { activeItem } = this.state
    const paneContent = {}
    paneContent.photos = this.renderPhotos
    paneContent.videos = this.renderVideos
    if (user.artForm === 'Music') {
      paneContent.music = this.renderMusic
    }

    const menuItems = () => {
      let items = []
      for (let key in paneContent) {
        items.push(
          <Menu.Item key={key} name={key} active={activeItem === key} onClick={this.handleItemClick} />
        )
      }
      return items
    }

    return (
      <div className='ui centered grid'>
        <div className='row'>
          <div className='three wide middle aligned column'>
            <h3 className='ui header centered inverted'>Content Rating</h3>
          </div>
          <div className='ten wide middle aligned column'>
            <div className='range-slider'>
              <Icon color='blue' size='large' name='thumbs down' />
              <input className='range-slider__range' type='range' min='0' max='1000' step='1' />
              <Icon color='red' size='large' name='thumbs up' />
            </div>
          </div>
          <div className='three wide middle aligned column'>
            <Button size='small' content='Submit' />
          </div>
        </div>
        <div className='row'>
          <div className='fluid column'>
            <Menu inverted tabular attached='top'>{menuItems()}</Menu>
            <Segment inverted attached='bottom'>
              {paneContent[activeItem]()}
            </Segment>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentTab

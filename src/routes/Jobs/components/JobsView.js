import React, { Component } from 'react'
import { Menu, Segment, List } from 'semantic-ui-react'
import Markdown from 'react-remarkable'

export default class JobsView extends Component {
  state = { activeItem: 'engineering' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderEngineering = () => {
    return (
      <List link>
        <List.Item active>intern - engineering</List.Item>
        <List.Item as='a'>senior software engineer</List.Item>
        <List.Item as='a'>senior data scientist</List.Item>
        <List.Item as='a'>front end engineer</List.Item>
        <List.Item as='a'>mobile engineer (ios)</List.Item>
        <List.Item as='a'>mobile engineer (android)</List.Item>
      </List>
    )
  }

  render() {
    const { activeItem } = this.state
    let content
    switch(activeItem) {
      case 'engineering':
        content = this.renderEngineering()
      break
      case 'operations':
      break
      case 'creative':
      break
    }
    return (
      <div>
        <h1 className='ui header inverted'>Jobs - Los Angeles</h1>
        <Menu tabular inverted>
          <Menu.Item name='engineering' active={activeItem === 'engineering'} onClick={this.handleItemClick} />
          <Menu.Item name='operations' active={activeItem === 'operations'} onClick={this.handleItemClick} />
          <Menu.Item name='creative' active={activeItem === 'creative'} onClick={this.handleItemClick} />
        </Menu>
        <Segment attached='bottom'>{content}</Segment>
      </div>
    )
  }
}

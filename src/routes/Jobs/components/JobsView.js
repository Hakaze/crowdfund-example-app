import React, { Component } from 'react'
import { Menu, Segment, List, Breadcrumb, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'
import Jobs from '../modules/Jobs'

export default class JobsView extends Component {
  state = { activeItem: 'engineering' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderJobs = () => {
    const { activeItem } = this.state
    const jobList = Jobs[activeItem].map((j, k) => (
      <List.Item key={k}>
        <Link to={`/jobs/${activeItem}/${k}`}>
          <Icon name='chevron circle right' />
          {j.title}
        </Link>
      </List.Item>
    ))
    return (
      <List relaxed='very' size='large' inverted link>
        {jobList}
      </List>
    )
  }

  render () {
    const { activeItem } = this.state
    return (
      <div>
        <Breadcrumb style={{ marginBottom: '1em' }} size='massive'>
          <Breadcrumb.Section active>
            Jobs - Los Angeles
          </Breadcrumb.Section>
        </Breadcrumb>
        <Menu tabular inverted color='blue' attached='top'>
          <Menu.Item name='engineering' active={activeItem === 'engineering'} onClick={this.handleItemClick} />
          <Menu.Item name='operations' active={activeItem === 'operations'} onClick={this.handleItemClick} />
          <Menu.Item name='creative' active={activeItem === 'creative'} onClick={this.handleItemClick} />
        </Menu>
        <Segment padded inverted secondary attached='bottom'>{this.renderJobs()}</Segment>
      </div>
    )
  }
}

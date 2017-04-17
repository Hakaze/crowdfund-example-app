import React, { Component, PropTypes } from 'react'
import { Segment, Menu, Sidebar, Icon } from 'semantic-ui-react'
import { goTo } from 'util/location'
import UserSidebar from 'components/UserSidebar'
import Navbar from 'components/Navbar'
import './CoreLayout.scss'

class CoreLayout extends Component {

  state = {
    sidebar: false
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    user: PropTypes.object,
    logoutUser: PropTypes.func.isRequired
  }

  toggleSidebar = (e) => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render () {
    const { children, user, logoutUser } = this.props
    const { sidebar } = this.state
    let pusherProps = { dimmed: sidebar }
    if (sidebar) {
      pusherProps.onClick = () => this.toggleSidebar()
    }
    return (
      <Sidebar.Pushable style={{ height: '100vh' }}>
        <Sidebar
          as={Menu}
          inverted
          animation='overlay'
          width='thin'
          icon='labeled'
          vertical
          direction='right'
          visible={sidebar}
        >
          <UserSidebar close={this.toggleSidebar} logout={logoutUser} />
        </Sidebar>
        <Navbar openSidebar={this.toggleSidebar} user={user} />
        <Sidebar.Pusher {...pusherProps} id='core-container'>
          <div className='ui padded relaxed grid'>
            <div className='four wide column'>
              <Menu vertical inverted fluid>
                <Menu.Item name='overview' onClick={() => goTo('/#overview')} content='Overview' />
                <Menu.Item name='about' onClick={() => goTo('/#about')} content='About' />
                <Menu.Item name='how-it-works' onClick={() => goTo('/#how-it-works')} content='How It Works' />
                <Menu.Item name='crowdfund' onClick={() => goTo('/crowdfund')} content='Equity Crowdfunding' />
                <Menu.Item name='promos' onClick={() => goTo('/promos')} content='Promos' />
                <Menu.Item name='invite' onClick={() => goTo('/invite')} content='Invite Friends' />
                <Menu.Item name='contact' onClick={() => goTo('/contact')} content='Contact Us' />
              </Menu>
            </div>
            <div className='twelve wide column'>
              <Segment padded inverted>
                {children}
              </Segment>
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default CoreLayout

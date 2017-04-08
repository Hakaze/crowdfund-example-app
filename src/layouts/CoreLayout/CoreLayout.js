import React from 'react'
import { Sidebar, Container, Segment, Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router'
import Navbar from 'components/Navbar'
import './CoreLayout.scss'

class CoreLayout extends React.Component {

  state = {
    sidebar: false
  }

  static propTypes = {
    children : React.PropTypes.element.isRequired
  }

  toggleSidebar = (e) => {
    e.preventDefault()
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  closeSidebar = (e) => {
    this.setState({
      sidebar: false
    })
  }

  render () {
    const { children } = this.props

    return (
      <div id='core-container'>
        <Navbar />
        <div className='ui padded relaxed grid'>
          <div className='four wide column'>
            <Menu vertical inverted fluid>
              <Menu.Item>
                <Link to='/#overview'>Overview</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/#about'>About</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/#how-it-works'>How It Works</Link>
              </Menu.Item>
              <Menu.Item>Promos</Menu.Item>
              <Menu.Item>Equity Crowd Funding</Menu.Item>
              <Menu.Item>Invite Friends</Menu.Item>
              <Menu.Item>Contact Us</Menu.Item>
            </Menu>
          </div>
          <div className='twelve wide column'>
            <Segment padded inverted>
            {children}
            </Segment>
          </div>
        </div>
      </div>
    )
  }
}

export default CoreLayout

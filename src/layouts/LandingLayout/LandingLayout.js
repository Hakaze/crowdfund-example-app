import React, { Component, PropTypes } from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'
import AltNavbar from 'components/AltNavbar'
import UserSidebar from 'components/UserSidebar'

export class LandingLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hideSearch: true,
      sidebar: false
    }
  }

  setSearch = (val) => {
    this.setState({
      hideSearch: val
    })
  }

  toggleSidebar = (e) => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render () {
    const { hideSearch, sidebar } = this.state
    const { user, logoutUser } = this.props
    const childWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        setVisibility: this.setSearch
      })
    )
    let pusherProps = { dimmed: sidebar }
    if (sidebar) {
      pusherProps.onClick = () => this.toggleSidebar()
    }
    return (
      <div>
        <Sidebar.Pushable>
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
            <UserSidebar logout={logoutUser} />
          </Sidebar>
          <AltNavbar openSidebar={this.toggleSidebar} user={user} hideSearch={hideSearch} />
          <Sidebar.Pusher {...pusherProps}>
            {childWithProps}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

LandingLayout.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.object,
  logoutUser: PropTypes.func.isRequired
}

export default LandingLayout

import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { goTo } from 'util/location'

const UserSidebar = ({ logout, close }) => {
  const clickHandler = (cb) => {
    cb()
    if (close) {
      close()
    }
  }
  return (
    <div>
      <Menu.Item onClick={() => clickHandler(() => goTo('/account'))} name='account'>
        <Icon name='settings' />
        Account
      </Menu.Item>
      <Menu.Item onClick={() => clickHandler(logout)} name='logout'>
        <Icon name='power' />
        Logout
      </Menu.Item>
    </div>
  )
}

UserSidebar.propTypes = {
  logout: React.PropTypes.func,
  close: React.PropTypes.func
}

export default UserSidebar

import React from 'react'
import { Icon, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router'
import logoIcon from './logo-icon.svg'
import InstantSearch from 'components/InstantSearch'
import './AltNavbar.scss'

const inputProps = {
  iconPosition: 'left',
  placeholder: 'Search',
  id: 'landing-nav-search',
  inverted: true
}

const Navbar = ({ hideSearch = false, user, openSidebar }) => {
  const searchClass = hideSearch ? 'icon search-hidden' : 'icon search-visible'
  const userMenu = () => {
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to={`/profile/${user.username}`}>
              <Image avatar src={user.profilePicture || '/img/avatar.png'} />
              <span style={{ color: '#ffffff', margin: '0 1em' }}>{`${user.firstName} ${user.lastName}`}</span>
            </Link>
          </Menu.Item>
          <Menu.Item fitted='horizontally'>
            <Link className='ui inverted' to='/chat'>
              <Icon link name='mail' size='large' inverted />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Icon onClick={() => openSidebar()} link name='setting' size='large' inverted />
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Menu.Item fitted='horizontally'>
            <Link className='ui small button circular inverted' to='/signup'>Sign Up</Link>
          </Menu.Item>
          <Menu.Item>
            <Link className='ui small button circular inverted' to='/login'>Log In</Link>
          </Menu.Item>
        </Menu.Menu>
      )
    }
  }

  return (
    <Menu size='massive' fixed='top' secondary>
      <Menu.Item>
        <Image size='mini' src={logoIcon} />
      </Menu.Item>
      <Menu.Item>
        <InstantSearch
          inputProps={inputProps}
          className={searchClass}
          icon={{ name: 'search', inverted: true }}
        />
      </Menu.Item>
      {userMenu()}
    </Menu>
  )
}

Navbar.propTypes = {
  hideSearch: React.PropTypes.bool,
  user: React.PropTypes.object,
  openSidebar: React.PropTypes.func
}

export default Navbar

import React from 'react'
import { Menu, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'
import InstantSearch from 'components/InstantSearch'
import logoIcon from './logo.svg'
import './Navbar.scss'

const inputProps = {
  iconPosition: 'left',
  placeholder: 'Search',
  id: 'landing-nav-search',
  inverted: true
}

const Navbar = ({ user, openSidebar }) => {
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
            <Icon link onClick={() => openSidebar()} name='setting' size='large' inverted />
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
    <Menu size='huge' fixed='top' inverted borderless id='fantank-nav'>
      <Menu.Item>
        <Link to='/'>
          <Image size='small' src={logoIcon} />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <InstantSearch
          inputProps={inputProps}
          icon={{ name: 'search', inverted: true }}
        />
      </Menu.Item>
      {userMenu()}
    </Menu>
  )
}

Navbar.propTypes = {
  user: React.PropTypes.object,
  openSidebar: React.PropTypes.func
}

export default Navbar

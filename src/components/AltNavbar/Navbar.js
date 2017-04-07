import React from 'react'
import { Button, Search, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router'
import logoIcon from './logo-icon.svg'
import './Navbar.scss'

const inputProps = {
  iconPosition: 'left',
  placeholder: 'Search',
  id: 'landing-nav-search',
  inverted: true
}

const Navbar = ({ hideSearch = false }) => {
  const searchClass = hideSearch ? 'icon search-hidden' : 'icon search-visible'
  return (
    <Menu size='massive' fixed='top' secondary>
      <Menu.Item>
        <Image size='mini' src={logoIcon} />
      </Menu.Item>
      <Menu.Item>
        <Search input={inputProps} icon={{ name: 'search', inverted: true }} className={searchClass} />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item fitted='horizontally'>
          <Link className='ui small button circular inverted' to='/signup'>Sign Up</Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='ui small button circular inverted' to='/login'>Log In</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

Navbar.propTypes = {
  hideSearch: React.PropTypes.bool
}

export default Navbar

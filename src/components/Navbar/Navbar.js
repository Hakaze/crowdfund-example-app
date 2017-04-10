import React from 'react'
import { Search, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router'
import logoIcon from './logo.svg'
import './Navbar.scss'

const inputProps = {
  iconPosition: 'left',
  placeholder: 'Search',
  id: 'landing-nav-search',
  inverted: true
}

const Navbar = ({ sidebarToggle }) => {
  return (
    <Menu size='huge' fixed='top' inverted borderless id='fantank-nav'>
      <Menu.Item>
        <Link to='/'>
          <Image size='small' src={logoIcon} />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Search input={inputProps} icon={{ name: 'search', inverted: true }} />
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
  sidebarToggle: React.PropTypes.func
}

export default Navbar

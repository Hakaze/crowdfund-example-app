import cx from 'classnames'
import React, { PropTypes } from 'react'
import { Item, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'

const menu = (
  <Menu compact attached='top' size='mini'>
    <Menu.Item position='right'>
      <Link to='/search' className='ui advanced'>
        <Icon name='options' />
        Advanced Search
      </Link>
    </Menu.Item>
  </Menu>
)

function SearchResults ({ children, className, hideMenu }) {
  const classes = cx('result-list transition', className)
  return (
    <div className={classes}>
      {hideMenu ? null : menu}
      <Item.Group relaxed='very'>{children}</Item.Group>
    </div>
  )
}

SearchResults.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideMenu: PropTypes.bool
}

export default SearchResults

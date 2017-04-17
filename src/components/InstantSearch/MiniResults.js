import cx from 'classnames'
import React, { PropTypes } from 'react'
import { Item, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router'
function SearchResults ({ children, className }) {
  const classes = cx('result-list transition', className)
  return (
    <div className={classes}>
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

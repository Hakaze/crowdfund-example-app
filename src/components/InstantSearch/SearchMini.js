import React, { PropTypes } from 'react'
import { Search } from 'semantic-ui-react'
import MiniResults from './MiniResults'
import SearchResult from './SearchResult'

class SearchExt extends Search {

  renderResultsMenu = () => {
    const { open } = this.state
    const resultsClasses = open ? 'visible' : ''
    const menuContent = this.renderMenuContent()
    if (!menuContent) return

    return <MiniResults className={resultsClasses}>
      {menuContent}
    </MiniResults>
  }

  renderResult = ({ childKey, ...result }, index, _array, offset = 0) => {
    const { resultRenderer } = this.props
    const { selectedIndex } = this.state
    const offsetIndex = index + offset

    return (
      <SearchResult
        key={childKey || result.title}
        active={selectedIndex === offsetIndex}
        onClick={this.handleItemClick}
        renderer={resultRenderer}
        {...result}
        id={offsetIndex} // Used to lookup the result on item click
      />
    )
  }

}

export default SearchExt

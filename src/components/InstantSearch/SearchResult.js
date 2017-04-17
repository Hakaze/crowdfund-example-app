import React from 'react'
import { SearchResult, Item } from 'semantic-ui-react'
import cx from 'classnames'

const useKeyOnly = (val, key) => val && key

class Result extends SearchResult {

  render () {
    const { active, className, renderer, id } = this.props

    const classes = cx(
      useKeyOnly(active, 'active'),
      'result',
      className,
    )

    // Note: You technically only need the 'content' wrapper when there's an
    // image. However, optionally wrapping it makes this function a lot more
    // complicated and harder to read. Since always wrapping it doesn't affect
    // the style in any way let's just do that.
    return (
      <Item key={id} className={classes} onClick={this.handleClick}>
        {renderer(this.props)}
      </Item>
    )
  }
}

export default Result

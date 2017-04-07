import React from 'react'
import AltNavbar from 'components/AltNavbar'

export class LandingLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideSearch: true
    }
  }
  setSearch = (val) => {
    this.setState({
      hideSearch: val
    })
  }

  render () {
    const { hideSearch } = this.state
    const childWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        setVisibility: this.setSearch
      })
    )
    return (
      <div>
        <AltNavbar hideSearch={hideSearch} />
        {childWithProps}
      </div>
    )
  }
}

LandingLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default LandingLayout

import React, { Component, PropTypes } from 'react'
import { Item } from 'semantic-ui-react'
import { algolia } from 'store/search'
import { goTo } from 'util/location'
import SearchExt from './SearchExt'
import './InstantSearch.scss'

const index = algolia.initIndex('Users')
class InstantSearch extends Component {
  state = {
    isLoading: false,
    results: [],
    value: ''
  }

  componentWillMount () {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  renderResults = ({ image, title, description }) => [
    <Item.Image key='image' avatar src={image} size='mini' />,
    <Item.Content key='content'>
      <h5 className='ui header'>{title}</h5>
      <Item.Meta style={{ fontSize: '1rem' }}>{description}</Item.Meta>
    </Item.Content>
  ]

  handleSearchChange = (e, value) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
      index.search(this.state.value)
        .then((content) => {
          this.setState({
            isLoading: false,
            results: content.hits.map((data, k) => {
              const title = data.stageName ? data.stageName : `${data.firstName} ${data.lastName}`
              const description = `${data.artForm} ${data.accountType} - ${data.artFormType || data.primaryModelType}`
              const image = data.profilePicture || '/img/avatar.png'
              const { username, id } = data
              return { title, description, image, id, username }
            })
          })
        })
    }, 500)
  }

  handleResultSelect = (e, { username }) => {
    goTo(`/profile/${username}`)
  }

  render () {
    const { isLoading, value, results } = this.state
    const { inputProps, className, onSelect, ...rest } = this.props
    return (
      <SearchExt
        className={className}
        loading={isLoading}
        onResultSelect={onSelect || this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        resultRenderer={this.renderResults}
        results={results}
        value={value}
        input={inputProps}
        fluid
        {...rest}
      />
    )
  }
}

InstantSearch.propTypes = {
  inputProps: PropTypes.object.isRequired,
  className: PropTypes.string,
  onSelect: PropTypes.func
}

export default InstantSearch

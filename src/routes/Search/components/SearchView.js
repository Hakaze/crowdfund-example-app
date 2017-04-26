import React, { Component, PropTypes } from 'react'
import {
  Breadcrumb, Segment, Menu, Button, Form, Icon, List, Message,
  Image, Sidebar
} from 'semantic-ui-react'
import genderList from 'util/genders'
import { goTo } from 'util/location'

const genders = genderList
genders.push({ key: 'Both', value: '', text: 'All' })
const artForms = [
  { key: 'Modeling', value: 'Modeling', text: 'Modeling' },
  { key: 'Music', value: 'Music', text: 'Music' },
  { key: 'Both', value: '', text: 'All' }
]
const accountTypes = [
  { key: 'Artist', value: 'Artist', text: 'Artist' },
  { key: 'Scout', value: 'Scout', text: 'Scout' },
  { key: 'Both', value: '', text: 'All' }
]

class SearchView extends Component {

  state = {
    options: false,
    text: '',
    artForm: '',
    accountType: '',
    gender: ''
  }

  static propTypes = {
    results: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool
    ]),
    search: PropTypes.func
  }

  handleChange = (e, { name, value }) => {
    const data = {}
    data[name] = value
    this.setState({
      ...this.state,
      ...data
    })
  }

  toggleOptions = () => {
    this.setState({
      options: !this.state.options
    })
  }

  doSearch = (e) => {
    e.preventDefault()
    this.setState({
      loading: true
    })
    const { text, artForm, accountType, gender } = this.state
    const { search } = this.props
    const filters = {
      artForm,
      accountType,
      gender
    }
    search(text, filters)
      .then((data) => {
        this.setState({
          loading: false
        })
      })
  }

  emptyState = () => {
    const { results } = this.props
    const msgProps = {
      color: 'blue',
      size: 'large',
      icon: 'info circle',
      header: 'Get Started',
      content: 'Enter search criteria and hit "go"...'
    }
    if (results && !results.get('hits').count()) {
      msgProps.content = 'Try changing your search terms...'
      msgProps.header = 'No Results'
    }
    return (
      <Segment basic padded='very'>
        <Message {...msgProps} />
      </Segment>
    )
  }

  renderResults = (val, idx) => {
    const data = val.toJS()
    const title = data.stageName ? data.stageName : `${data.firstName} ${data.lastName}`
    const secondary = `${data.artFormType || data.primaryModelType || data.primaryGenre}`
    const desc = `${data.artForm} ${data.accountType} - ${secondary}`
    const image = data.profilePicture || '/img/avatar.png'
    const { username } = data

    return (
      <List.Item key={idx} onClick={() => goTo(`/profile/${username}`)}>
        <Image key='image' shape='circular' src={image} size='tiny' />
        <List.Content>
          <List.Header content={title} />
          <span style={{ fontSize: '1rem' }}>{desc}</span>
        </List.Content>
      </List.Item>
    )
  }

  render () {
    const { text, artForm, accountType, gender, options, loading } = this.state
    const { results } = this.props
    return (
      <div>
        <Breadcrumb style={{ marginBottom: '1em' }} size='massive'>
          <Breadcrumb.Section active>
            Advanced Search
          </Breadcrumb.Section>
        </Breadcrumb>
        <Menu borderless compact size='mini' attached='top'>
          <Menu.Item>
            <Form style={{ width: '100%' }}>
              <Form.Input
                name='text'
                icon='search'
                iconPosition='left'
                value={text}
                onChange={this.handleChange}
                placeholder='Search...'
                action={{ content: 'Go', onClick: this.doSearch }}
              />
            </Form>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Form size='mini'>
                <Form.Group widths='equal' style={{ margin: '0' }}>
                  <Form.Select
                    label='Artform'
                    placeholder='select...'
                    name='artForm'
                    options={artForms}
                    value={artForm}
                    onChange={this.handleChange}
                  />
                  <Form.Select
                    label='User Type'
                    placeholder='select...'
                    name='accountType'
                    options={accountTypes}
                    value={accountType}
                    onChange={this.handleChange}
                  />
                  <Form.Select
                    label='Gender'
                    placeholder='select...'
                    name='gender'
                    options={genders}
                    value={gender}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form>
            </Menu.Item>
            <Menu.Item name='options' active={options} onClick={this.toggleOptions}>
              <Icon size='large' name='options' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Sidebar.Pushable as={Segment} attached='bottom' secondary loading={loading}>
          <Sidebar
            as={Menu}
            animation='push'
            width='thin'
            direction='right'
            visible={options}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='home'>
              Refine
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher style={{ minHeight: '60vh' }}>
            {results && results.get('hits').count()
              ? (
                <List divided selection verticalAlign='middle' size='massive'>
                  {results.get('hits').map(this.renderResults)}
                </List>
              )
              : this.emptyState()
            }
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SearchView

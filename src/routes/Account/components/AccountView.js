import React, { Component, PropTypes } from 'react'
import {
  Menu, Segment, Form, Breadcrumb, List, Checkbox, Button,
  Modal, Image, Embed
} from 'semantic-ui-react'
import ethnicities from 'util/ethnicities'
import incomeRanges from 'util/incomeRanges'
import genders from 'util/genders'
import AddPhotos from './AddPhotos'
import AddMusic from './AddMusic'
import AddVideos from './AddVideos'
import './AccountView.scss'

export default class AccountView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItem: 'general',
      edit: false,
      form: props.user.toJS(),
      photoModal: false,
      musicModal: false,
      videoModal: false
    }
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    save: PropTypes.func.isRequired,
    uploadPhotos: PropTypes.func.isRequired,
    uploadVideos: PropTypes.func.isRequired,
    uploadMusic: PropTypes.func.isRequired
  }

  toggleModal = (type) => {
    let _state = this.state
    _state[`${type}Modal`] = !_state[`${type}Modal`]
    this.setState({
      ...this.state,
      ..._state
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleChange = (e, { value, name, checked }) => {
    const field = {}
    field[name] = value || checked
    this.setState({
      form: {
        ...this.state.form,
        ...field
      }
    })
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  saveProfile = (e) => {
    e.preventDefault();
    const { save } = this.props
    const { form } = this.state
    save(form)
  }

  renderGeneral = () => {
    const { edit, form } = this.state
    const stageName = form.accountType === 'Artist' && form.artForm === 'Music'
      ? <Form.Input
          name='stageName'
          label='Stage Name'
          placeholder='Stage Name'
          onChange={this.handleChange}
          required
          value={form.stageName}
          disabled={!edit}
        />
      : null
    return (
      <div className='ui grid'>
        <div className='row'>
          <div className='fourteen wide column'>
            <List relaxed='very' horizontal inverted>
              <List.Item>
                <List.Header as='h3'>Username</List.Header>
                {form.username}
              </List.Item>
              <List.Item>
                <List.Header as='h3'>E-mail</List.Header>
                {form.email}
              </List.Item>
              <List.Item>
                <List.Header as='h3'>Account Type</List.Header>
                {form.artForm} {form.accountType} - {form.artFormType}
              </List.Item>
            </List>
          </div>
          <div className='two wide center aligned column'>
            <h4 className='ui header inverted'>Edit</h4>
            <Checkbox toggle checked={edit} onChange={this.toggleEdit} />
          </div>
        </div>
        <div className='row'>
          <div className='column fluid'>
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.Input
                  name='firstName'
                  label='First Name'
                  placeholder='First Name'
                  onChange={this.handleChange}
                  required
                  value={form.firstName}
                  disabled={!edit}
                />
                <Form.Input
                  name='lastName'
                  label='Last Name'
                  placeholder='Last Name'
                  onChange={this.handleChange}
                  required
                  value={form.lastName}
                  disabled={!edit}
                />
                {stageName}
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  name='location'
                  label='Location'
                  placeholder='Location'
                  value={form.location}
                  onChange={this.handleChange}
                  required
                  disabled={!edit}
                />
                <Form.Input
                  name='birthDate'
                  label='Birth Date'
                  placeholder='Birth Date'
                  onChange={this.handleChange}
                  required
                  value={form.birthDate}
                  disabled={!edit}
                />
                <Form.Select
                  name='gender'
                  label='Gender'
                  options={genders}
                  placeholder='Gender'
                  value={form.gender}
                  disabled={!edit}
                  onChange={this.handleChange}
                  required
                  fluid
                  selectOnBlur={false}
                />
              </Form.Group>
              {form.accountType === 'Scout'
                ? (
                  <Form.Group widths='equal'>
                    <Form.Select
                      name='ethnicity'
                      label='Ethnicity'
                      options={ethnicities}
                      placeholder='Ethnicity'
                      onChange={this.handleChange}
                      value={form.ethnicity}
                      disabled={!edit}
                      fluid
                      selectOnBlur={false}
                    />
                    <Form.Select
                      name='incomeRange'
                      label='Income Range'
                      options={incomeRanges}
                      placeholder='Income Range'
                      onChange={this.handleChange}
                      value={form.incomeRanges}
                      disabled={!edit}
                      fluid
                      selectOnBlur={false}
                    />
                  </Form.Group>
                )
                : (
                  <Form.Select
                    name='ethnicity'
                    label='Ethnicity'
                    options={ethnicities}
                    placeholder='Ethnicity'
                    onChange={this.handleChange}
                    disabled={!edit}
                    selectOnBlur={false}
                    value={form.ethnicity}
                  />
                )
              }
              <Button primary floated='right' onClick={this.saveProfile} content='Save' />
            </Form>
          </div>
        </div>
      </div>
    )
  }

  renderBio = () => {
    const { edit, form } = this.state
    return (
      <div className='ui grid'>
        <div className='row'>
          <div className='fourteen wide column' />
          <div className='two wide center aligned column'>
            <h4 className='ui header inverted'>Edit</h4>
            <Checkbox toggle checked={edit} onChange={this.toggleEdit} />
          </div>
        </div>
        <div className='row'>
          <div className='column fluid'>
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.TextArea
                  rows='6'
                  name='bioAbout'
                  label='About Me'
                  onChange={this.handleChange}
                  disabled={!edit}
                  value={form.bioAbout}
                />
                <Form.TextArea
                  rows='6'
                  name='bioAreaFocus'
                  label='Area Focus'
                  onChange={this.handleChange}
                  disabled={!edit}
                  value={form.bioAreaFocus}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.TextArea
                  rows='6'
                  name='bioSkills'
                  label='Additional Skills'
                  onChange={this.handleChange}
                  disabled={!edit}
                  value={form.bioSkills}
                />
                <Form.TextArea
                  rows='6'
                  name='bioInterests'
                  label='Interests'
                  onChange={this.handleChange}
                  disabled={!edit}
                  value={form.bioInterests}
                />
              </Form.Group>
              <Button primary floated='right' onClick={this.saveProfile} content='Save' />
            </Form>
          </div>
        </div>
      </div>
    )
  }

  renderPhotos = () => {
    const { photos, uploadPhotos } = this.props
    const { photoModal } = this.state
    const toggle = () => this.toggleModal('photo')
    return (
      <div className='ui grid'>
        <div className='row'>
          <div className='column fluid'>
            <Button
              onClick={toggle}
              floated='right'
              primary
              icon='add'
              content='Add Photos'
            />
            <Modal open={photoModal} onClose={toggle}>
              <Modal.Header>Upload Photos</Modal.Header>
              <Modal.Content>
                <AddPhotos onSuccess={toggle} doSave={uploadPhotos} />
              </Modal.Content>
            </Modal>
          </div>
        </div>
        <div className='three column row'>
          {photos.toList().toJS().map((p, k) => (
            <div className='column stretched' key={k}>
              <Image src={p.location} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderVideos = () => {
    const { videos, uploadVideos } = this.props
    const { videoModal } = this.state
    const toggle = () => this.toggleModal('video')
    return (
      <div className='ui grid'>
        <div className='row'>
          <div className='column fluid'>
            <Button
              onClick={toggle}
              floated='right'
              primary
              icon='add'
              content='Add Video'
            />
            <Modal open={videoModal} onClose={toggle}>
              <Modal.Header>Add Video</Modal.Header>
              <Modal.Content>
                <AddVideos onSuccess={toggle} doSave={uploadVideos} />
              </Modal.Content>
            </Modal>
          </div>
        </div>
        <div className='three column row'>
          {videos.toList().toJS().map((p, k) => (
            <div className='column stretched' key={k}>
              <Embed id={p.link} source='vimeo' />
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderMusic = () => {
    const { music, uploadMusic } = this.props
    const { musicModal } = this.state
    const toggle = () => this.toggleModal('music')
    return (
      <div className='ui grid'>
        <div className='row'>
          <div className='column fluid'>
            <Button
              onClick={toggle}
              floated='right'
              primary
              icon='add'
              content='Add Music'
            />
            <Modal open={musicModal} onClose={toggle}>
              <Modal.Header>Upload Music</Modal.Header>
              <Modal.Content>
                <AddMusic onSuccess={toggle} doSave={uploadMusic} />
              </Modal.Content>
            </Modal>
          </div>
        </div>
        <div className='three column row'>
          {music.toList().toJS().map((p, k) => (
            <div className='column stretched' key={k}>
              <Embed url={p.location} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  render () {
    const { activeItem, form } = this.state
    const paneContent = {
      general: this.renderGeneral,
      bio: this.renderBio
    }
    if (form.accountType === 'Artist') {
      paneContent.photos = this.renderPhotos
      paneContent.videos = this.renderVideos
      if (form.artForm === 'Music') {
        paneContent.music = this.renderMusic
      }
    }
    const menuItems = () => {
      let items = []
      for (let key in paneContent) {
        items.push(
          <Menu.Item key={key} name={key} active={activeItem === key} onClick={this.handleItemClick} />
        )
      }
      return items
    }
    const paneRender = paneContent[activeItem]
    return (
      <div>
        <Breadcrumb style={{ marginBottom: '1em' }} size='massive'>
          <Breadcrumb.Section active>
            Account Details
          </Breadcrumb.Section>
        </Breadcrumb>
        <Menu inverted pointing secondary>
          {menuItems()}
        </Menu>
        <Segment padded inverted secondary>{paneRender()}</Segment>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import { Button, Header, Icon, Item, Form, Embed } from 'semantic-ui-react'

class AddVideos extends Component {

  static propTypes = {
    doSave: PropTypes.func,
    onSuccess: PropTypes.func
  }

  state = {
    vimeoLink: ''
  }

  onChange = (e, { value }) => {
    this.setState({
      vimeoLink: value
    })
  }

  removeFile = () => {
    this.setState({
      vimeoLink: ''
    })
  }

  save = () => {
    const { vimeoLink } = this.state
    const { doSave, onSuccess } = this.props
    doSave(vimeoLink).then((data) => {
      if (data.length) {
        onSuccess()
      }
    })
  }

  render () {
    const { vimeoLink } = this.state
    return (
      <div className='ui padded grid'>
        <div className='six wide column'>
          <Form>
            <Form.Input
              type='text'
              name='vimeoLink'
              onChange={this.onChange}
              value={vimeoLink}
              label='Vimeo ID (e.g. 1435863)'
            />
          </Form>
        </div>
        <div className='ten wide column'>
          <Button disabled={!vimeoLink} primary onClick={this.save} fluid icon='add circle' content='Add Video' />
          {vimeoLink
            ? <Embed id={vimeoLink} source='vimeo' />
            : null
          }
        </div>
      </div>
    )
  }
}

export default AddVideos

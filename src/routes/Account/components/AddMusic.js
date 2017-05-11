import React, { Component, PropTypes } from 'react'
import { Button, Header, Icon, Item, Form } from 'semantic-ui-react'

class AddMusic extends Component {

  static propTypes = {
    doSave: PropTypes.func,
    onSuccess: PropTypes.func
  }

  state = {
    scLink: ''
  }

  onChange = (e, { value }) => {
    this.setState({
      scLink: value
    })
  }

  removeFile = () => {
    this.setState({
      scLink: ''
    })
  }

  save = () => {
    const { scLink } = this.state
    const { doSave, onSuccess } = this.props
    doSave(scLink).then((data) => {
      if (data.length) {
        onSuccess()
      }
    })
  }

  render () {
    const { scLink } = this.state
    const pref = 'https://w.soundcloud.com/player/?url=https%3A'
    const suf = '&amp;hide_related=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
    return (
      <div className='ui padded grid'>
        <div className='six wide column'>
          <Form>
            <Form.Input
              type='text'
              name='scLink'
              onChange={this.onChange}
              value={scLink}
              label='Soundcloud Song ID'
            />
          </Form>
        </div>
        <div className='ten wide column'>
          <Button disabled={!scLink} primary onClick={this.save} fluid icon='add circle' content='Add Music' />
          {scLink
            ? <iframe
              style={{ border: 0 }}
              width='100%'
              height='280'
              scrolling='no'
              frameBorder='no'
              src={`${pref}//api.soundcloud.com/tracks/${scLink}&amp;auto_play=false${suf}`} />
            : null
          }
        </div>
      </div>
    )
  }
}

export default AddMusic

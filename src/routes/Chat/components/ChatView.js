import React, { Component, PropTypes } from 'react'
import { Segment, Menu, List, Popup, Button, Form, Divider } from 'semantic-ui-react'
import MiniSearch from 'components/InstantSearch/MiniSearch'
import './ChatView.scss'

const inputProps = {
  iconPosition: 'left',
  icon: { name: 'user' },
  label: { content: 'To' },
  labelPosition: 'right',
  placeholder: 'Type to find user...'
}

class ChatView extends Component {

  static propTypes = {
    conversations: PropTypes.object,
    messages: PropTypes.object
  }

  state = {
    activeConvo: null,
    newMsgTxt: ''
  }

  handleChange = (e, { value, name }) => {
    const field = {}
    field[name] = value
    this.setState({
      ...this.state,
      ...field
    })
  }

  renderConversations = () => {
    const { conversations } = this.props
    return converstions.map((v, k) => {
      <List.Item>

      </List.Item>
    })
  }
  render () {
    const { newMsgOpen } = this.state

    return (
      <div id='chat-view' className='ui two column divided grid'>
        <div className='five wide column'>
          <Menu size='small' borderless inverted attached='top'>
            <Menu.Item header content='Messages' />
            <Menu.Item position='right'>
              <Button inverted size='mini' circular icon='write' />
            </Menu.Item>
          </Menu>
          <Segment attached tertiary inverted>
            <List>

            </List>
          </Segment>
        </div>
        <div className='left floated eleven wide column'>
          <Segment tertiary inverted>
            Chat
          </Segment>
        </div>
      </div>
    )
  }
}

export default ChatView

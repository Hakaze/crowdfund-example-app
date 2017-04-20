import React, { Component, PropTypes } from 'react'
import { Segment, Menu, List, Button,
  Input, Divider, Image, Message
} from 'semantic-ui-react'
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
    messages: PropTypes.object,
    user: PropTypes.object,
    getMessages: PropTypes.func,
    doSendMessage: PropTypes.func
  }

  state = {
    activeConvo: null,
    message: ''
  }

  componentDidMount () {
    const { conversations } = this.props
    if (conversations.count()) {
      this.setActiveConvo(conversations.first().toJS().id)
    }
  }

  handleChange = (e, { value, name }) => {
    const field = {}
    field[name] = value
    this.setState({
      ...this.state,
      ...field
    })
  }

  setActiveConvo = (id) => {
    const { getMessages } = this.props
    this.setState({
      convoLoading: true
    })
    setTimeout(() => {
      getMessages(id).then((data) => {
        this.setState({
          activeConvo: id,
          convoLoading: false
        })
      })
    }, 1000)
  }

  renderConversations = () => {
    const { conversations, user } = this.props
    const { activeConvo } = this.state
    return conversations.toList().toJS().map((v, k) => {
      const otherParticipant = v.participants.filter(p => p.id !== user.id)[0]
      return (
        <List.Item active={activeConvo === v.id} key={k} onClick={() => this.setActiveConvo(v.id)}>
          <Image avatar src={otherParticipant.profilePicture} />
          <List.Content>
            {otherParticipant.username}
          </List.Content>
        </List.Item>
      )
    })
  }

  renderActiveConvo = () => {
    const { activeConvo, message } = this.state
    const { messages, conversations, user } = this.props
    const actionProps = {
      icon: 'send',
      content: 'Send',
      disabled: message === '',
      primary: true,
      onClick: this.sendMessage
    }
    console.log(messages.toJS())
    const convo = conversations.get(`${activeConvo}`).toJS()
    const messageList = messages.getIn([`${activeConvo}`]).toJS()
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <List style={{ flex: 1, overflow: 'auto' }}>
          {messageList.map((m, k) => {
            const itemProps = {}
            if (m.userId === user.id) {
              itemProps.floated = 'right'
            }
            const from = convo.participants.find(p => p.id === m.userId)
            return (
              <List.Item key={k}>
                <Image {...itemProps} avatar src={from.profilePicture} />
                <List.Content {...itemProps}>
                  <Message compact content={m.message} />
                </List.Content>
              </List.Item>
            )
          })}
        </List>
        <div>
          <Input
            fluid
            value={message}
            name='message'
            size='large'
            onChange={this.handleChange}
            action={actionProps}
            placeholder='Type message...'
          />
        </div>
      </div>
    )
  }

  sendMessage = () => {
    const { message, activeConvo } = this.state
    const { doSendMessage } = this.props
    doSendMessage(activeConvo, message)
  }

  render () {
    const { activeConvo, convoLoading } = this.state
    return (
      <div id='chat-view' className='ui two column divided grid'>
        <div className='five wide column'>
          <Menu size='small' borderless inverted attached='top'>
            <Menu.Item header content='Messages' />
          </Menu>
          <Segment attached tertiary inverted>
            <List inverted animated selection verticalAlign='middle' divided>
              {this.renderConversations()}
            </List>
          </Segment>
        </div>
        <div className='left floated eleven wide column'>
          <Segment loading={convoLoading} style={{ height: '500px', minHeight: '500px' }} tertiary inverted>
            {activeConvo ? this.renderActiveConvo() : 'You have no conversations'}
          </Segment>
        </div>
      </div>
    )
  }
}

export default ChatView

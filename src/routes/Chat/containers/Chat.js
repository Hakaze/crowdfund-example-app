import { connect } from 'react-redux'
import ChatView from '../components/ChatView'
import { fetchMessages, sendMessage } from 'store/chat'

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.chat.conversations,
    messages: state.chat.messages,
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (id) => dispatch(fetchMessages(id)),
    doSendMessage: (convoId, message) => dispatch(sendMessage(convoId, message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatView)

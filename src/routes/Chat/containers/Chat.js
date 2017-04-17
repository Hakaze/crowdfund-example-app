import { connect } from 'react-redux'
import ChatView from '../components/ChatView'

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.chat.conversations,
    messages: state.chat.messages,
    conversations: state.chat.conversations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //doSendMessage: (payload) => dispatch(sendMessage(payload)),
    //doSendReply: (payload) => dispatch(sendReply(payload)),
    //readThread: (payload) => dispatch(readThread(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatView)

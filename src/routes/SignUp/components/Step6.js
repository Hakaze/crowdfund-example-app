import React from 'react'
import { Segment, Container, Message, Icon, Button, Image } from 'semantic-ui-react'
import logo from 'components/Navbar/logo.svg'

class Step6 extends React.Component {
  static propTypes = {
    getStore: React.PropTypes.func
  }

  render () {
    const { getStore } = this.props
    const { form } = getStore()
    return (
      <Container className='step6'>
        <Segment inverted padded secondary>
          <h1 className='ui header inverted'>You Are Done!</h1>
          <Message size='large' info icon>
            <Icon name='inbox' />
            <Message.Content>
              <Message.Header>
                Thank you for registering
              </Message.Header>
              To activate your account, please click the activation link which was sent to
              <strong>{form.email}</strong>. If you have not received it yet, please check your
              spam or junk folder.
            </Message.Content>
          </Message>
          <Button primary content='Resend Activation Link' />
          <Image src={logo} size='large' centered />
        </Segment>
      </Container>
    )
  }
}

export default Step6

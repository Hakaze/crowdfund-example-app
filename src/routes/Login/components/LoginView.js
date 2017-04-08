import React from 'react'
import { Form, Segment, Image, Divider, Button } from 'semantic-ui-react'
import logoIcon from 'components/Navbar/logo.svg'

class LoginView extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    form: {
      email: null,
      password: null
    }
  }

  updateForm = (e, { name, value }) => {
    const data = {}
    data[name] = value
    this.setState({
      form: {
        ...this.state.form,
        ...data
      }
    })
  }

  render () {
    return (
      <div className='ui grid centered'>
        <div className='seven wide column'>
          <Segment padded='very' inverted tertiary textAlign='left' raised>
            <div className='ui label huge attached top inverted black'>Login</div>
            <Divider hidden />
            <Image src={logoIcon} centered size='small' />
            <Divider hidden />
            <Form inverted size='medium'>
              <Form.Input
                inverted
                type='email'
                placeholder='E-mail'
                name='email'
                onChange={this.updateForm}
                fluid
              />
              <Form.Input
                inverted
                placeholder='Password'
                type='password'
                name='password'
                onChange={this.updateForm}
                fluid
              />
              <Divider section inverted />
              <Button primary size='medium' content='Submit' fluid />
            </Form>
          </Segment>
        </div>
      </div>
    )
  }
}

LoginView.propTypes = {}

export default LoginView

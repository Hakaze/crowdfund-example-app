import React from 'react'
import { Segment, Container, Button, Form, Divider, Checkbox } from 'semantic-ui-react'

class Step5 extends React.Component {
  static propTypes = {
    getStore: React.PropTypes.func,
    updateForm: React.PropTypes.func,
    goToPage: React.PropTypes.func,
    signup: React.PropTypes.func
  }

  handleChange = (e, { value, name, checked }) => {
    const { updateForm } = this.props
    const field = {}
    field[name] = value || checked
    updateForm({ ...field })
  }

  register = () => {
    const { signup, getStore, goToPage } = this.props
    const { form, page } = getStore()
    signup(form).then(() => {
      goToPage(page + 1)
    })
  }

  render () {
    const { getStore, goToPage } = this.props
    const { form, page } = getStore()
    const matchEmail = form.email && form.confirmEmail && form.email === form.confirmEmail
    const matchPass = form.password && form.confirmPassword && form.password === form.confirmPassword
    const disableNext = !matchPass || !matchEmail || !form.terms
    return (
      <Container className='step5'>
        <Segment inverted padded secondary>
          <h1 className='ui header inverted'>Almost There!</h1>
          <div className='ui grid centered'>
            <div className='twelve wide column'>
              <Form inverted>
                <Form.Input
                  name='username'
                  label='username'
                  placeholder='Username'
                  onChange={this.handleChange}
                  required
                  fluid
                />
                <Form.Group widths='equal'>
                  <Form.Input
                    name='email'
                    label='E-mail'
                    placeholder='E-mail'
                    input='email'
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    name='confirmEmail'
                    label='Confirm E-mail'
                    placeholder='Confirm E-mail'
                    input='email'
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    name='password'
                    label='Password'
                    placeholder='Password'
                    input='password'
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    name='confirmPassword'
                    label='Confirm Password'
                    placeholder='Confirm Password'
                    input='password'
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <a href='/terms' target='_blank'>Terms &amp; Conditions</a>
                <Form.Field>
                  <Checkbox
                    name='terms'
                    checked={form.terms}
                    onChange={this.handleChange}
                    onClick={this.handleChange}
                    label='I acknowledge that I have read and agree to the above Terms and Conditions'
                   />
                </Form.Field>
              </Form>
            </div>
          </div>
          <Divider hidden />
          <Button
            circular
            onClick={() => goToPage(page - 1)}
            floated='left'
            content='Back'
          />
          <Button
            circular
            primary
            onClick={() => this.register()}
            disabled={disableNext}
            floated='right'
            content='Submit'
          />
          <Divider clearing hidden />
        </Segment>
      </Container>
    )
  }
}

export default Step5

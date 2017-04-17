import React from 'react'
import { Container, Step } from 'semantic-ui-react'
import './SignUp.scss'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'

class SignUpView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 0,
      form: {
        subscription: 'free',
        artForm: null,
        accountType: null
      }
    }
  }

  goToPage = (num) => {
    this.setState({
      page: num
    })
  }

  updateForm = (data) => {
    this.setState({
      form: {
        ...this.state.form,
        ...data
      }
    })
  }

  getStore = () => this.state

  render () {
    const { page } = this.state
    const stepIndicators = [
      { completed: page > 0, active: page === 0, title: 'Account Type' },
      { completed: page > 1, active: page === 1, title: 'Art Info' },
      { completed: page > 2, active: page === 2, title: 'Personal Info' },
      { completed: page > 3, active: page === 3, title: 'Contact Info' },
      { completed: page > 4, active: page === 4, title: 'Confirm Email' }
    ]
    const steps = [
      <Step1 getStore={this.getStore} goToPage={this.goToPage} updateForm={this.updateForm} />,
      <Step2 getStore={this.getStore} goToPage={this.goToPage} updateForm={this.updateForm} />,
      <Step3 getStore={this.getStore} goToPage={this.goToPage} updateForm={this.updateForm} />,
      <Step4 getStore={this.getStore} goToPage={this.goToPage} updateForm={this.updateForm} />,
      <Step5 getStore={this.getStore} goToPage={this.goToPage} updateForm={this.updateForm} />,
      <Step6 getStore={this.getStore} />
    ]
    return (
      <Container>
        <Step.Group fluid size='small' ordered items={stepIndicators} />
        {steps[page]}
      </Container>
    )
  }
}

SignUpView.propTypes = {}

export default SignUpView

import React from 'react'
import { Form, Breadcrumb } from 'semantic-ui-react'

const ContactView = () => {
  const options = [
    { key: 'info', text: 'General Info', value: 'general-info' },
    { key: 'tech', text: 'Technical Support', value: 'tech-support' }
  ]
  return (
    <div>
      <Breadcrumb style={{ marginBottom: '1em' }} size='massive'>
        <Breadcrumb.Section active>
          Contact Us
        </Breadcrumb.Section>
      </Breadcrumb>
      <Form inverted>
        <Form.Group widths='equal'>
          <Form.Input label='First Name' placeholder='First Name' />
          <Form.Input label='Last Name' placeholder='Last Name' />
          <Form.Input label='E-Mail' placeholder='Your E-Mail' />
        </Form.Group>
        <Form.Select label='Reason' options={options} placeholder='Choose a reason' />
        <Form.TextArea label='Comments' placeholder='Tell us what we can do for you...' />
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default ContactView

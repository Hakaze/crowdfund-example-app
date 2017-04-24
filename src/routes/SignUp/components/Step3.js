import React from 'react'
import { Segment, Container, Button, Form, Divider, Label } from 'semantic-ui-react'
import ethnicities from 'util/ethnicities'
import incomeRanges from 'util/incomeRanges'
import genders from 'util/genders'

class Step3 extends React.Component {
  static propTypes = {
    getStore: React.PropTypes.func,
    updateForm: React.PropTypes.func,
    goToPage: React.PropTypes.func
  }

  handleChange = (e, { value, name }) => {
    const { updateForm } = this.props
    const field = {}
    field[name] = value
    updateForm({ ...field })
  }

  renderArtist = () => {
    const { getStore, goToPage } = this.props
    const { form, page } = getStore()
    const disableNext = form.artFormType === 'Music' ? (
      !form.firstName || !form.lastName || !form.stageName || !form.gender || !form.location
    ) : (!form.firstName || !form.lastName || !form.gender || !form.location)
    return (
      <Segment inverted padded secondary>
        <h2 className='ui header inverted'>Personal Information</h2>
        <div className='ui grid centered'>
          <div className='twelve wide column'>
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.Input
                  name='firstName'
                  label='First Name'
                  placeholder='First Name'
                  onChange={this.handleChange}
                  required
                />
                <Form.Input
                  name='lastName'
                  label='Last Name'
                  placeholder='Last Name'
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group widths='equal'>
                {form.artFormType === 'Music'
                  ? <Form.Input
                    name='stageName'
                    label='Stage Name'
                    placeholder='Stage Name'
                    onChange={this.handleChange}
                    required
                    fluid />
                  : null
                }
                <Form.Input
                  type='date'
                  name='birthDate'
                  label='Birth Date'
                  placeholder='Birth Date'
                  onChange={this.handleChange}
                  required
                  fluid
                />
                <Form.Input
                  name='location'
                  label='Location'
                  placeholder='Location'
                  onChange={this.handleChange}
                  required
                  fluid
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select
                  name='ethnicity'
                  label='Ethnicity'
                  options={ethnicities}
                  placeholder='Ethnicity'
                  onChange={this.handleChange}
                  selectOnBlur={false}
                  fluid
                />
                <Form.Select
                  name='gender'
                  label='Gender'
                  options={genders}
                  placeholder='Gender'
                  onChange={this.handleChange}
                  required
                  fluid
                />
              </Form.Group>
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
          onClick={() => goToPage(page + 1)}
          disabled={disableNext}
          floated='right'
          content='Next'
        />
        <Divider clearing hidden />
      </Segment>
    )
  }

  renderScout () {
    const { getStore, goToPage } = this.props
    const { form, page } = getStore()
    const disableNext = (
      !form.firstName || !form.lastName || !form.gender || !form.location
    )
    return (
      <Segment inverted padded secondary>
        <h2 className='ui header inverted'>Personal Information</h2>
        <div className='ui grid centered'>
          <div className='twelve wide column'>
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.Input
                  name='firstName'
                  label='First Name'
                  placeholder='First Name'
                  onChange={this.handleChange}
                  required
                />
                <Form.Input
                  name='lastName'
                  label='Last Name'
                  placeholder='Last Name'
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select
                  name='gender'
                  label='Gender'
                  options={genders}
                  placeholder='Gender'
                  onChange={this.handleChange}
                  required
                  fluid
                />
                <Form.Input
                  name='location'
                  label='Location'
                  placeholder='Location'
                  onChange={this.handleChange}
                  required
                  fluid
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select
                  name='ethnicity'
                  label='Ethnicity'
                  options={ethnicities}
                  placeholder='Ethnicity'
                  onChange={this.handleChange}
                  selectOnBlur={false}
                  fluid
                />
                <Form.Select
                  name='incomeRange'
                  label='Income Range'
                  options={incomeRanges}
                  placeholder='Income Range'
                  onChange={this.handleChange}
                  selectOnBlur={false}
                  fluid
                />
              </Form.Group>
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
          onClick={() => goToPage(page + 1)}
          disabled={disableNext}
          floated='right'
          content='Next'
        />
        <Divider clearing hidden />
      </Segment>
    )
  }
  render () {
    const { getStore } = this.props
    const { form } = getStore()
    return (
      <Container className='step3'>
        {form.accountType === 'artist' ? this.renderArtist() : null}
        {form.accountType === 'scout' ? this.renderScout() : null}
      </Container>
    )
  }
}

export default Step3

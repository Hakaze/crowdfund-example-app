import React from 'react'
import { Segment, Image, Container, Button, Divider, Header } from 'semantic-ui-react'
import pricingIcon1 from './pricing-icon1.png'
import pricingIcon2 from './pricing-icon2.png'

class Step4 extends React.Component {
  static propTypes = {
    getStore: React.PropTypes.func,
    updateForm: React.PropTypes.func,
    goToPage: React.PropTypes.func
  }

  setPlan = (val) => {
    const { updateForm } = this.props
    updateForm({ subscription: val })
  }

  render () {
    const { getStore, goToPage } = this.props
    const { form, page } = getStore()
    return (
      <Container className='step4'>
        <Segment inverted secondary>
          <h2 className='ui header inverted'>Subscription Plan</h2>
          <div className='ui two column grid centered'>
            <div className='seven wide column'>
              <Segment.Group>
                <Segment color='blue' inverted compact>
                  <Header as='h2' inverted>
                    <Header.Content>
                      <Header.Subheader>BASIC</Header.Subheader>
                      FREE
                      <Header.Subheader as='h5'>
                        &nbsp;
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </Segment>
                <Segment tertiary compact>
                  <div className='ui two column grid'>
                    <div className='column'>
                      <div className='ui tiny header'>
                        BASE SOLUTIONS
                      </div>
                      <div className='ui list mini' style={{ marginTop: 4 }}>
                        <div className='item'>Talent Search Engine</div>
                        <div className='item'>Social Networking</div>
                        <div className='item'>Instant Messaging Notifications</div>
                        <div className='item'>Storage 1 GB</div>
                      </div>
                    </div>
                    <div className='column'>
                      <div className='ui tiny header'>
                        CORE SOLUTIONS
                      </div>
                      <div className='ui list mini' style={{ marginTop: 4 }}>
                        <div className='item'># of page visits</div>
                        <div className='item'># of content views / plays</div>
                        <div className='item'># of votes</div>
                        <div className='item'># of friends / reach</div>
                      </div>
                    </div>
                  </div>
                </Segment>
                <Segment secondary compact>
                  <div className='ui two column grid'>
                    <div className='column'>
                      <div className='ui tiny header'>
                        CONTENT SOLUTIONS
                      </div>
                      <div className='ui list mini' style={{ marginTop: 4 }}>
                        <div className='item'>Buzz Maps</div>
                      </div>
                    </div>
                    <div className='column'>
                      <div className='ui tiny header'>
                        SCOUTING SOLUTIONS
                      </div>
                      <div className='ui list mini' style={{ marginTop: 4 }}>
                        <div className='item'>Scouting I.T. Analytics &amp; Dashboards </div>
                        <div className='item'>Talent Tracking Listing</div>
                        <div className='item'>&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </Segment>
                <Button
                  attached
                  color='blue'
                  active={form.subscription === 'free'}
                  content={form.subscription === 'free' ? 'Currently Selected' : 'Go Free' }
                  onClick={() => this.setPlan('free')}
                />
              </Segment.Group>
            </div>
            <div className='seven wide column'>
              <Segment.Group>
                <Segment color='teal' inverted compact>
                  <Header as='h2' inverted>
                    <Header.Content>
                      <Header.Subheader>PLUS</Header.Subheader>
                      $9.99 / month
                      <Header.Subheader as='h5'>
                        (12 month free trial)
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </Segment>
                <Segment tertiary compact>
                  <div className='ui two column grid'>
                    <div className='column'>
                      <div className='ui tiny header'>
                        BASE SOLUTIONS
                      </div>
                      <div className='ui list mini' style={{ marginTop: 4 }}>
                        <div className='item'>Talent Search Engine</div>
                        <div className='item'>Social Networking</div>
                        <div className='item'>Instant Messaging Notifications</div>
                        <div className='item'>Storage 1 GB</div>
                      </div>
                    </div>
                    <div className='column'>
                      <div className='ui tiny header'>
                        CORE SOLUTIONS
                      </div>
                      <div className='ui list mini' style={{ marginTop: 4 }}>
                        <div className='item'># of page visits</div>
                        <div className='item'># of content views / plays</div>
                        <div className='item'># of votes</div>
                        <div className='item'># of friends / reach</div>
                      </div>
                    </div>
                  </div>
                </Segment>
                <Segment secondary compact>
                  <div className='ui two column grid'>
                    <div className='column'>
                      <div className='ui tiny header'>
                        CONTENT SOLUTIONS
                      </div>
                      <div className='ui list mini' style={{ marginTop: 4 }}>
                        <div className='item'>Filtering / Ranking Technology</div>
                        <div className='item'>Content Score Technology™</div>
                        <div className='item'>Buzz Maps</div>
                      </div>
                    </div>
                    <div className='column'>
                      <div className='ui tiny header'>
                        SCOUTING SOLUTIONS
                      </div>
                      <div className='ui list mini' style={{ marginTop: 4 }}>
                        <div className='item'>Scouting I.T. Analytics &amp; Dashboards </div>
                        <div className='item'>Talent Tracking Listing</div>
                        <div className='item'>Talent Tracking Dashboards</div>
                      </div>
                    </div>
                  </div>
                </Segment>
                <Button
                  attached
                  color='teal'
                  active={form.subscription === 'plus'}
                  content={form.subscription === 'plus' ? 'Currently Selected' : 'Go Plus' }
                  onClick={() => this.setPlan('plus')}
                />
              </Segment.Group>
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
            floated='right'
            content='Next'
          />
          <Divider clearing hidden />
        </Segment>
      </Container>
    )
  }
}

export default Step4

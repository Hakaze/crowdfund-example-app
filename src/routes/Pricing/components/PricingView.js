import React from 'react'
import { Segment, Breadcrumb, Header } from 'semantic-ui-react'

const PricingView = () => {
  return (
    <div>
      <Breadcrumb style={{ marginBottom: '1em' }} size='massive'>
        <Breadcrumb.Section active>
          Subscription Plans
        </Breadcrumb.Section>
      </Breadcrumb>
      <Segment inverted secondary padded>
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
            </Segment.Group>
          </div>
        </div>
      </Segment>
    </div>
  )
}

export default PricingView

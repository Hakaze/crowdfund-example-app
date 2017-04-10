import React, { Component } from 'react'
import { Segment, Breadcrumb } from 'semantic-ui-react'
import Markdown from 'react-remarkable'
import Axios from 'axios'

export default class TermsView extends Component {

  state = {
    markdown: null
  }

  componentDidMount () {
    Axios.get(`/content/terms.md`)
    .then(({ data }) => {
      this.setState({
        content: data
      })
    })
  }

  render () {
    const { content } = this.state
    return (
      <div>
        <Breadcrumb style={{ marginBottom: '1em' }} size='massive'>
          <Breadcrumb.Section active>
            Terms &amp; Conditions
          </Breadcrumb.Section>
        </Breadcrumb>
        <Segment inverted secondary padded>
          <Markdown source={content} />
        </Segment>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import { Segment, Breadcrumb, Icon } from 'semantic-ui-react'
import { ucFirst } from 'util/strings'
import Markdown from 'react-remarkable'
import Axios from 'axios'
import { Link } from 'react-router'

export default class JobDetailsView extends Component {
  static propTypes = {
    jobDetails: PropTypes.object.isRequired,
    jobCategory: PropTypes.string.isRequired
  }

  state = {
    markdown: null
  }

  componentDidMount () {
    const { jobDetails } = this.props
    Axios.get(`/docs/${jobDetails.content}.md`)
    .then(({ data }) => {
      this.setState({
        markdown: data
      })
    })
  }

  render () {
    const { jobCategory } = this.props
    const { markdown } = this.state
    return (
      <div>
        <Breadcrumb style={{ marginBottom: '1em' }} size='massive'>
          <Breadcrumb.Section>
            <Link to='/jobs'>Jobs - Los Angeles</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider>
            <Icon name='right angle' inverted />
          </Breadcrumb.Divider>
          <Breadcrumb.Section active>
            {ucFirst(jobCategory)}
          </Breadcrumb.Section>
        </Breadcrumb>
        <Segment inverted secondary padded>
          <Markdown source={markdown} />
        </Segment>
      </div>
    )
  }
}

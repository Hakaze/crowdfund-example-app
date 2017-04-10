import React from 'react'
import { Container, Image, Search, Button, Header, Divider, Menu } from 'semantic-ui-react'
import { Link } from 'react-router'
import logoBig from './logo-big.svg'

const inputProps = {
  fluid: true,
  iconPosition: 'left',
  placeholder: 'Search for artists, scouts and more'
}

export default class WelcomeSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mounted: false
    }
  }

  static propTypes = {
    children: React.PropTypes.node
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        mounted: true
      })
    }, 500)
  }

  render () {
    const addClass = this.state.mounted ? 'welcome-container ready' : 'welcome-container'
    const { children } = this.props
    return (
      <div className={addClass}>
        <div className='welcome'>
          <div className='dim'>
            <Container>
              <div className='ui centered grid'>
                <div className='row'>
                  <div className='column'>
                    <Image size='big' centered src={logoBig} />
                  </div>
                </div>
                <div className='row'>
                  <div className='ten wide column' style={{ paddingTop: '20px' }}>
                    <Search fluid size='huge' input={inputProps} />
                  </div>
                </div>
                <div className='row'>
                  <div className='column'>
                    <Divider hidden section />
                    <Header size='huge' inverted>T R E N D I N G</Header>
                    <Divider hidden section />
                    <Button basic circular inverted size='huge'>Music</Button>
                    <Button basic circular inverted size='huge'>Modeling</Button>
                  </div>
                </div>
              </div>
              <div className='sticky-links'>
                <Menu secondary compact inverted>
                  <Menu.Item>
                    <Link to='/terms'>Terms</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/privacy'>Privacy</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/jobs'>Jobs</Link>
                  </Menu.Item>
                  <Menu.Item name='Support'>
                    <Link to='/support'>Support</Link>
                  </Menu.Item>
                </Menu>
              </div>
              {children}
            </Container>
          </div>
        </div>
        <div className='sticky-footer'><span>What is FanTank?</span></div>
      </div>
    )
  }
}

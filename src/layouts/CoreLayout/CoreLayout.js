import React, { Component, PropTypes } from 'react'
import { Segment, Menu, Sidebar, Icon } from 'semantic-ui-react'
import { Line, defaults } from 'react-chartjs-2'
import { goTo } from 'util/location'
import UserSidebar from 'components/UserSidebar'
import Navbar from 'components/Navbar'
import './CoreLayout.scss'
defaults.global.defaultFontColor = '#8D8D8E'

const lineData = {
  labels: ['7PM', '8PM', '9PM', '10PM'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(60, 197, 235, 0.4)',
      borderColor: 'rgba(60, 197, 235, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(60, 197, 235, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(60, 197, 235, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [10, 22, 30, 42, 48]
    }
  ]
}

const chartOps = {
  global: {
    maintainAspectRatio: false
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(141, 141, 142, 0.3)'
      }
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(141, 141, 142, 0.3)'
      },
      scaleLabel: {
        labelString: 'K'
      },
      ticks: {
        callback: (value, index, values) => {
          return `${value}k`
        }
      }
    }]
  }
}

class CoreLayout extends Component {

  state = {
    sidebar: false
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    user: PropTypes.object,
    logoutUser: PropTypes.func.isRequired
  }

  toggleSidebar = (e) => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render () {
    const { children, user, logoutUser } = this.props
    const { sidebar } = this.state
    let pusherProps = { dimmed: sidebar }
    if (sidebar) {
      pusherProps.onClick = () => this.toggleSidebar()
    }
    return (
      <Sidebar.Pushable style={{ height: '100vh' }}>
        <Sidebar
          as={Menu}
          inverted
          animation='overlay'
          width='thin'
          icon='labeled'
          vertical
          direction='right'
          visible={sidebar}
        >
          <UserSidebar close={this.toggleSidebar} logout={logoutUser} />
        </Sidebar>
        <Navbar openSidebar={this.toggleSidebar} user={user} />
        <Sidebar.Pusher {...pusherProps} id='core-container'>
          <div className='ui padded relaxed grid'>
            <div className='four wide column'>
              <Menu vertical inverted fluid>
                <Menu.Item name='overview' onClick={() => goTo('/#overview')} content='Overview' />
                <Menu.Item name='about' onClick={() => goTo('/#about')} content='About' />
                <Menu.Item name='how-it-works' onClick={() => goTo('/#how-it-works')} content='How It Works' />
                <Menu.Item name='crowdfund' onClick={() => goTo('/crowdfund')} content='Equity Crowdfunding' />
                <Menu.Item name='promos' onClick={() => goTo('/promos')} content='Promos' />
                <Menu.Item name='invite' onClick={() => goTo('/invite')} content='Invite Friends' />
                <Menu.Item name='contact' onClick={() => goTo('/contact')} content='Contact Us' />
              </Menu>
              <h3 className='ui header inverted centered'>Voting Volume</h3>
              <Line data={lineData} height={280} options={chartOps} />
            </div>
            <div className='twelve wide column'>
              <Segment padded inverted>
                {children}
              </Segment>
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default CoreLayout

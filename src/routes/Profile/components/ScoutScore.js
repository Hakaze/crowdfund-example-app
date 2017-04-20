import React from 'react'
import { Statistic, Button, List, Label, Image, Icon } from 'semantic-ui-react'
import { Line, defaults } from 'react-chartjs-2'
defaults.global.defaultFontColor = '#8D8D8E'
defaults.global.legend.position = 'right'
const lineData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'My Scouting Score',
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
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Fans',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [51, 43, 48, 59, 67, 44, 61]
    },
    {
      label: 'Influentials',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(224, 57, 151, 0.4)',
      borderColor: 'rgba(224, 57, 151, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(224, 57, 151, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(224, 57, 151, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [32, 56, 73, 77, 69, 52, 70]
    },
    {
      label: 'Peer to Peer (Artists)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(251, 189, 8, 0.4)',
      borderColor: 'rgba(251, 189, 8, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(251, 189, 8, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(251, 189, 8, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [28, 45, 62, 81, 64, 53, 32]
    },
    {
      label: 'All Other',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(33, 186, 69, 0.4)',
      borderColor: 'rgba(33, 186, 69, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(33, 186, 69, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(33, 186, 69, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [32, 72, 37, 45, 56, 67, 70]
    }
  ]
}

const avatarSrc = 'http://s3.amazonaws.com/hiphopdx-production/2013/06/Just-Blaze_06-07-2013.jpg'
const ContentScore = () => {
  return (
    <div className='ui grid'>
      <div className='row'>
        <div className='four wide column'>
          <h2 className='ui header inverted'>Content Score</h2>
        </div>
        <div className='twelve wide column'>
          <Button.Group floated='right' size='small' inverted>
            <Button active>Day</Button>
            <Button>Week</Button>
            <Button>Month</Button>
            <Button>6 Months</Button>
            <Button>Year</Button>
          </Button.Group>
        </div>
      </div>
      <div className='row stretched'>
        <div className='six wide column'>
          <Statistic inverted>
            <Statistic.Value>12.50</Statistic.Value>
            <Statistic.Label><span className='ui header green'>+6.89 (40.53%)</span></Statistic.Label>
          </Statistic>
          <List inverted divided selection>
            <List.Item>
              <Label color='grey' horizontal>Day Range</Label>
              12.50-42.00
            </List.Item>
            <List.Item>
              <Label color='grey' horizontal>52 Week</Label>
              13.00-97.00
            </List.Item>
            <List.Item>
              <Label color='grey' horizontal>Open</Label>
              12,978
            </List.Item>
          </List>
        </div>
        <div className='ten wide column'>
          <Line data={lineData} />
        </div>
      </div>
      <div className='row'>
        <div className='fluid column'>
          <h2 className='ui header inverted'>Recent Ratings</h2>
          <List padded='very' size='large' inverted divided>
            <List.Item inverted>
              <Image size='mini' shape='circular' src={avatarSrc} />
              <List.Content style={{ paddingLeft: '1em' }}>
                <List.Header>Just Blaze</List.Header>
                <List.Description>
                  Music Artist - Producer | 04/13/2017 <br />
                  # Of Votes: 19,893
                </List.Description>
              </List.Content>
              <List.Content floated='right'>
                <Statistic inverted color='green' size='tiny'>
                  <Statistic.Value>
                    73.3% &nbsp;
                    <Icon name='thumbs up' />
                  </Statistic.Value>
                  <Statistic.Label>Crowd Difference</Statistic.Label>
                </Statistic>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </div>
    </div>
  )
}

ContentScore.propTypes = {}

export default ContentScore

import React from 'react'
import { Statistic, Button, List, Label } from 'semantic-ui-react'
import { Line, defaults } from 'react-chartjs-2'
defaults.global.defaultFontColor = '#8D8D8E'

const lineData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Daily Content Score Change',
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
    }
  ]
}

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
            <List.Item>
              <Label color='grey' horizontal># Of Views</Label>
              9,001
            </List.Item>
            <List.Item>
              <Label color='grey' horizontal># Of Votes</Label>
              3,214
            </List.Item>
          </List>
        </div>
        <div className='ten wide column'>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  )
}

ContentScore.propTypes = {}

export default ContentScore

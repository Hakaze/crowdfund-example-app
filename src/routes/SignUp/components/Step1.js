import React from 'react'
import { Segment, Container, Button, Image, Divider } from 'semantic-ui-react'
import artistIcon from './artist-icon.png'
import scoutIcon from './scout-icon.png'
import musicIcon from './music-icon.png'
import modelingIcon from './modeling-icon.png'

class Step1 extends React.Component {
  static propTypes = {
    getStore: React.PropTypes.func,
    updateForm: React.PropTypes.func,
    goToPage: React.PropTypes.func
  }

  render () {
    const { getStore, updateForm, goToPage } = this.props
    const { form, page } = getStore()
    const disableNext = !form.artForm || !form.accountType
    return (
      <Container>
        <Segment inverted padded secondary>
          <h2 className='ui header inverted'>Select an Artform</h2>
          <div className='ui grid centered'>
            <div className='four wide column'>
              <Segment inverted>
                <Image centered height={65} width={65} src={musicIcon} />
                <Divider hidden />
                <Button
                  onClick={() => updateForm({ artForm: 'music' })}
                  active={form.artForm === 'music'}
                  inverted
                  basic
                  color='blue'
                  size='small'
                  compact>Music
                </Button>
              </Segment>
            </div>
            <div className='four wide column'>
              <Segment inverted>
                <Image centered height={65} width={65} src={modelingIcon} />
                <Divider hidden />
                <Button
                  onClick={() => updateForm({ artForm: 'modeling' })}
                  active={form.artForm === 'modeling'}
                  inverted
                  basic
                  color='blue'
                  size='small'
                  compact>Modeling
                </Button>
              </Segment>
            </div>
          </div>
        </Segment>
        <Segment inverted padded secondary>
          <h2 className='ui header inverted'>Select an Account Type</h2>
          <div className='ui grid centered'>
            <div className='four wide column'>
              <Segment inverted>
                <Image centered height={65} src={artistIcon} />
                <Divider horizontal inverted style={{ fontSize: '12px' }}>Become a digital</Divider>
                <Button
                  onClick={() => updateForm({ accountType: 'artist' })}
                  active={form.accountType === 'artist'}
                  inverted
                  basic
                  color='blue'
                  size='small'
                  compact>Artist
                </Button>
              </Segment>
            </div>
            <div className='four wide column'>
              <Segment inverted>
                <Image centered height={65} src={scoutIcon} />
                <Divider horizontal inverted style={{ fontSize: '12px' }}>Become a digital</Divider>
                <Button
                  onClick={() => updateForm({ accountType: 'scout' })}
                  active={form.accountType === 'scout'}
                  inverted
                  basic
                  color='blue'
                  size='small'
                  compact>Scout
                </Button>
              </Segment>
            </div>
          </div>
        </Segment>
        <Button
          primary
          onClick={() => goToPage(page + 1)}
          disabled={disableNext}
          floated='right'
          content='Next'
        />
        <Divider clearing hidden />
      </Container>
    )
  }
}

export default Step1

import React from 'react'
import { Segment, Container, Button, Header, Divider } from 'semantic-ui-react'
import genres from 'util/genres'
import musicianTypes from 'util/musicianTypes'
import modelTypes from 'util/modelTypes'
import modelScoutTypes from 'util/modelScoutTypes'
import musicScoutTypes from 'util/musicScoutTypes'

class Step2 extends React.Component {
  static propTypes = {
    getStore: React.PropTypes.func,
    updateForm: React.PropTypes.func,
    goToPage: React.PropTypes.func
  }

  renderMusicArtist = () => {
    const { updateForm, getStore, goToPage } = this.props
    const { form, page } = getStore()
    const disableNext = !form.mainGenre || !form.musicianType
    const types = musicianTypes.map((t, i) => (
      <Button
        key={i}
        basic
        circular
        inverted
        color='blue'
        onClick={() => updateForm({ musicianType: t })}
        active={form.musicianType === t}
        content={t}
      />
    ))
    const mainGenreBtns = genres.map((g, i) => (
      <Button
        key={i}
        basic
        circular
        inverted
        color='blue'
        onClick={() => updateForm({ mainGenre: g })}
        active={form.mainGenre === g}
        content={g} />
    ))
    const otherGenres = genres.filter(g => g !== form.mainGenre)
    const otherGenreBtns = otherGenres.map((g, i) => (
      <Button
        key={i}
        basic
        circular
        inverted
        color='blue'
        onClick={() => updateForm({ otherGenre: g })}
        active={form.otherGenre === g}
        content={g} />
    ))
    return (
      <Segment inverted padded secondary>
        <h2 className='ui header inverted'>Music Artist Type</h2>
        <h3 className='ui header inverted centered'>What kind of musician are you?</h3>
        <div className='ui grid centered'>
          <div className='row'>{types}</div>
        </div>
        <h3 className='ui header inverted centered'>Main Genre</h3>
        <div className='ui grid centered'>
          <div className='row'>{mainGenreBtns}</div>
        </div>
        <h3 className='ui header inverted centered'>Other Genre</h3>
        <div className='ui grid centered'>
          <div className='row'>{otherGenreBtns}</div>
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

  renderModelArtist = () => {
    const { updateForm, getStore, goToPage } = this.props
    const { form, page } = getStore()
    const disableNext = !form.modelType
    const types = modelTypes.map((t, i) => (
      <Button
        key={i}
        basic
        circular
        inverted
        color='blue'
        onClick={() => updateForm({ modelType: t })}
        active={form.modelType === t}
        content={t}
      />
    ))
    const otherModelBtns = genres.map((g, i) => (
      <Button
        key={i}
        basic
        circular
        inverted
        color='blue'
        onClick={() => updateForm({ otherModelType: g })}
        active={form.otherModelType === g}
        content={g} />
    ))
    return (
      <Segment inverted padded secondary>
        <h2 className='ui header inverted'>Model Type</h2>
        <h3 className='ui header inverted centered'>What kind of model are you?</h3>
        <div className='ui grid centered'>
          <div className='row'>{types}</div>
        </div>
        <h3 className='ui header inverted centered'>Select your secondary interest</h3>
        <div className='ui grid centered'>
          <div className='row'>{otherModelBtns}</div>
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

  renderModelScout = () => {
    const { updateForm, getStore, goToPage } = this.props
    const { form, page } = getStore()
    const disableNext = !form.scoutType
    const categories = modelScoutTypes.map((cat, k) => {
      let btns = cat.values.map((t, i) => (
        <Button
          key={i}
          basic
          circular
          inverted
          color='blue'
          onClick={() => updateForm({ scoutType: t })}
          active={form.scoutType === t}
          content={t}
        />
      ))
      return (
        <Segment tertiary inverted key={k}>
          <Header attached='top' as='h4'>{cat.label}</Header>
          <div className='ui grid centered'>
            <div className='row'>{btns}</div>
          </div>
        </Segment>
      )
    })
    return (
      <Segment inverted padded secondary>
        <h2 className='ui header inverted'>User Type</h2>
        {categories}
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

  renderMusicScout = () => {
    const { updateForm, getStore, goToPage } = this.props
    const { form, page } = getStore()
    const disableNext = !form.scoutType
    const categories = musicScoutTypes.map((cat, k) => {
      let btns = cat.values.map((t, i) => (
        <Button
          key={i}
          basic
          size='mini'
          circular
          inverted
          color='blue'
          onClick={() => updateForm({ scoutType: t })}
          active={form.scoutType === t}
          content={t}
        />
      ))
      return (
        <div className='column' key={k}>
          <Header inverted size='tiny'>{cat.label}</Header>
          <Segment tertiary inverted>{btns}</Segment>
        </div>
      )
    })
    return (
      <Segment inverted padded secondary>
        <h2 className='ui header inverted'>User Type</h2>
        <div className='ui one column grid centered'>
          {categories}
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
      <Container className='step2'>
        {form.artForm === 'music' && form.accountType === 'artist'
          ? this.renderMusicArtist()
          : null
        }
        {form.artForm === 'modeling' && form.accountType === 'artist'
          ? this.renderModelArtist()
          : null
        }
        {form.artForm === 'modeling' && form.accountType === 'scout'
          ? this.renderModelScout()
          : null
        }
        {form.artForm === 'music' && form.accountType === 'scout'
          ? this.renderMusicScout()
          : null
        }
      </Container>
    )
  }
}

export default Step2

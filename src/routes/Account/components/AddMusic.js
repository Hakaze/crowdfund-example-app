import React, { Component, PropTypes } from 'react'
import { Button, Header, Icon, Item, Embed } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

class AddMusic extends Component {

  static propTypes = {
    doSave: PropTypes.func,
    onSuccess: PropTypes.func
  }

  state = {
    files: []
  }

  onDrop = (addedFiles) => {
    this.setState({
      files: addedFiles
    })
  }

  onOpenClick = () => {
    this.dropzone.open()
  }

  removeFile = (index) => {
    const { files } = this.state
    files.splice(index, 1)
    this.setState({
      files: files
    })
  }

  save = () => {
    const { files } = this.state
    const { doSave, onSuccess } = this.props
    doSave(files).then((data) => {
      if (data.length) {
        onSuccess()
      }
    })
  }

  renderMusic = (f, key) => {
    return (
      <Item key={key}>
        <Item.Content verticalAlign='middle'>
          <Item.Description>
            {f.name}
            <Button floated='right' color='red' icon='remove circle' onClick={() => this.removeFile(key)} />
          </Item.Description>
        </Item.Content>
      </Item>
    )
  }

  render () {
    const style = {
      textAlign: 'center',
      width: 200,
      height: 200,
      padding: '32px 16px',
      margin: 16,
      borderWidth: 2,
      borderColor: '#666',
      borderStyle: 'dashed',
      borderRadius: 5
    }
    const activeStyle = {
      borderStyle: 'solid',
      borderColor: '#2ECC40',
      backgroundColor: '#eee'
    }

    const dzProps = {
      style,
      activeStyle,
      onDrop: this.onDrop,
      ref: (node) => { this.dropzone = node },
      multiple: false,
      accept: 'audio/*'
    }

    const { files } = this.state
    return (
      <div className='ui padded grid'>
        <div className='six wide column'>
          <Dropzone {...dzProps}>
            <Header as='h2' icon>
              <Icon name='music' />
              Drop Audio Files Here
            </Header>
          </Dropzone>
        </div>
        <div className='ten wide column'>
          {
            files.length > 0
              ? <Button primary onClick={this.save} fluid icon='upload' content='Upload' />
              : <Button positive onClick={this.onOpenClick} fluid icon='add circle' content='Browse Files' />
          }
          {files.length > 0
            ? <Item.Group divided relaxed>{files.map(this.renderMusic)}</Item.Group>
            : null
          }
        </div>
      </div>
    )
  }
}

export default AddMusic

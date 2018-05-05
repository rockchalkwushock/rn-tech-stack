import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView } from 'react-native'

import Item from './Item'

class List extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }
  renderRow = library => <Item library={library} />
  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
  }
}

export default connect(state => ({ libraries: state.libraries }))(List)

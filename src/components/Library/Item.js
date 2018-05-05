import React, { Component } from 'react'
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { connect } from 'react-redux'

import { Section } from '../common'
import { selectLibrary } from '../../data'

type Props = {
  expanded: boolean,
  library: {
    description: string,
    id: number,
    title: string
  },
  selectLibrary: Function
}

class Item extends Component<Props> {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }
  renderDescription() {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <Section>
          <Text style={styles.root.description}>{library.description}</Text>
        </Section>
      )
    }
  }
  render() {
    const { id, title } = this.props.library
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <Section>
            <Text style={styles.root.text}>{title}</Text>
          </Section>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  root: {
    description: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10
    },
    text: {
      fontSize: 18,
      paddingLeft: 15
    }
  }
}

export default connect(
  (state, ownProps) => ({ expanded: state.selection === ownProps.library.id }),
  {
    selectLibrary
  }
)(Item)

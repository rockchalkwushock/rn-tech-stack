import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import { Header, List } from './components'
import { store } from './data'

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Header text="Tech Stack" />
      <List />
    </View>
  </Provider>
)

export default App

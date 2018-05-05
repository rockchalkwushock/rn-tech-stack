import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './data'

const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
)

export default App

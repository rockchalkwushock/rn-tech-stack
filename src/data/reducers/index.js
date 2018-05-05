import { combineReducers } from 'redux'
import libraryReducer from './library'
import selectionReducer from './selection'

export default combineReducers({
  libraries: libraryReducer,
  selection: selectionReducer
})

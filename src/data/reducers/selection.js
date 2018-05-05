import { SELECT_LIBRARY } from '../actions'

export default (state = null, { payload, type }) => {
  switch (type) {
    case SELECT_LIBRARY:
      return payload
    default:
      return state
  }
}

import { combineReducers } from 'redux-immutable'
import { reducers as headerReducers } from '../common/header/store'

const reducers = combineReducers({
  header: headerReducers
})

export default reducers
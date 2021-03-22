import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  loginStatus: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_STATUS:
      return state.set('loginStatus', action.loginStatus)
    default:
      return state
  }
}

export default reducer
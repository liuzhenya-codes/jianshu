import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
 
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
})

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FOUCS_SEARCH_INPUT: {
      return state.set('focused', true)
    }
    case actionTypes.BLUR_SEARCH_INPUT: {
      return state.set('focused', false)
    }
    case actionTypes.SET_LIST: {
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      })
      // return state.set('list', action.list).set('totalPage', action.totalPage)
    }
    case actionTypes.SET_PAGE: {
      return state.set('page', action.page)
    }
    case actionTypes.MOUSE_ENTER: {
      return state.set('mouseIn', true)
    }
    case actionTypes.MOUSE_LEAVE: {
      return state.set('mouseIn', false)
    }
    default:
      return state
  }
}

export default reducers


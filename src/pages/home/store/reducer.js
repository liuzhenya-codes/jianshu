import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  scrollTopShow: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      })
    case actionTypes.LOAD_MORE:
      return state.merge({
        articleList: state.get('articleList').concat(action.data),
        articlePage: action.nextPage
      })
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('scrollTopShow', action.scrollTopShow)
    default:
      return state
  }
}

export default reducer
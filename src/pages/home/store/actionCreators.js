import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const initHomeDataAction = (result) => {
  return {
    type: actionTypes.INIT_HOME_DATA,
    topicList: fromJS(result.topicList),
    articleList: fromJS(result.articleList),
    recommendList: fromJS(result.recommendList)
  }
}

const loadMoreAction = (data, nextPage) => {
  return {
    type: actionTypes.LOAD_MORE,
    data: fromJS(data),
    nextPage
  }
}

export const getInitHomeDataAction = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res) => {
      dispatch(initHomeDataAction(res.data.data))
    }).catch((e) => {
      console.warn('获取首页数据失败', e)
    })
  }
}

export const getLoadMoreAction = (nextPage) => {
  return (dispatch) => {
    axios.get(`api/homeList.json?page=${nextPage}`).then((res) => {
    dispatch(loadMoreAction(res.data.data, nextPage))
    }).catch((e) => {
      console.warn('加载更多出错', e)
    })
  }
}

export const getToggleScrollTop = (scrollTopShow) => {
  return {
    type: actionTypes.TOGGLE_SCROLL_TOP,
    scrollTopShow
  }
}
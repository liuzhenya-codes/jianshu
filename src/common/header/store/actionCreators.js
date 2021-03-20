import  * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const getSetListAction = (list) => {
  return {
    type: actionTypes.SET_LIST,
    list: fromJS(list),
    totalPage: Math.ceil(list.length / 10)
  }
}

export const getFoucsSearchAction = () => {
  return {
    type: actionTypes.FOUCS_SEARCH_INPUT
  }
}

export const getBlurSearchAction = () => {
  return {
    type: actionTypes.BLUR_SEARCH_INPUT
  }
}

export const getMouseEnterAction = () => {
  return {
    type: actionTypes.MOUSE_ENTER
  }
}

export const getMouseLeaveAction = () => {
  return {
    type: actionTypes.MOUSE_LEAVE
  }
}

export const getSetPageAction = (page) => {
  return {
    type: actionTypes.SET_PAGE,
    page
  }
}

export const getInitListDataAction = () => {
  return (dispatch) => {
    axios.get('api/headerList.json').then((res) => {
      dispatch(getSetListAction(res.data.data))
    }).catch((e) => {
      console.warn('请求热搜数据失败', e)
    })
  }
}
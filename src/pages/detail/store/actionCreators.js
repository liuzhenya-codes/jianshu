import * as actionTypes from './actionTypes'
import axios from 'axios'

const initDetailDataAction = (title, content) => {
  return {
    type: actionTypes.INIT_DETAIL_DATA,
    title,
    content
  }
}

export const getDetailData = (articleId) => {
  return (dispatch) => {
    axios.get(`api/detail.json?articleId=${articleId}`).then((res) => {
      const { title, content } = res.data.data
      dispatch(initDetailDataAction(title, content))
    }).catch((e) => {
      console.warn('详情页数据获取失败', e)
    })
  }
}
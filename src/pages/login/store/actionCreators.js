import * as actionTypes from './actionTypes'
import axios from 'axios'

export const changeLoginStatusAction = (loginStatus) => {
  return {
    type: actionTypes.CHANGE_LOGIN_STATUS,
    loginStatus
  }
}

export const checkLogin = (account, password) => {
  return (dispatch) => {
    axios.get(`api/login.json?account=${account}&password=${password}`).then(res => {
      dispatch(changeLoginStatusAction(true))
    }).catch(e => {
      console.warn('登录出错', e)
    })
  }
}
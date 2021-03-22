import { Component } from 'react'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor (props) {
    super(props)
    this.toLogin = this.toLogin.bind(this)
    this.inputKeyUp = this.inputKeyUp.bind(this)
  }

  get newLoginstatus () { // 这就是计算属性, 但是只有他被调用时, 才会计算? 可是 render 里用到它, 它变化时本身 render 也会重新计算, 重新调用它?
    console.log(this)
    return this.props.loginStatus
  }

  inputKeyUp (e) {
    if (e.keyCode === 13) this.toLogin()
  }

  toLogin () {
    const account = this.accountInput.value
    const password = this.passwordInput.value
    if (!account) {
      alert('用户名不能为空!')
      return
    }
    if (!password) {
      alert('密码不能为空!')
      return
    }
    this.props.checkLogin(account, password)
  }

  render () {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' ref={(ele) => {this.accountInput = ele}} onKeyUp={this.inputKeyUp} />
          <Input placeholder='密码' ref={(ele) => {this.passwordInput = ele}} onKeyUp={this.inputKeyUp} type='password' />
          <Button onClick={this.toLogin}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }

  UNSAFE_componentWillReceiveProps (newProps, oldProps) {
    if (newProps.loginStatus === true) {
      this.props.history.push('/')
    }
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    checkLogin (account, password) {
      dispatch(actionCreators.checkLogin(account, password))
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Login))
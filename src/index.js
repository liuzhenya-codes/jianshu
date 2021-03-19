import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import Header from './common/header';
import IconfontGlobalStyle from './statics/iconfont/iconfont'
import { GlobalStyle } from './style.js'

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontGlobalStyle />,
    <Header />
  </Fragment>,
  document.getElementById('root')
)

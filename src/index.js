import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import Header from './common/header';
import IconfontGlobalStyle from './statics/iconfont/iconfont'
import { GlobalStyle } from './style.js'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontGlobalStyle />,
    <Provider store={store}>
      <Header />
    </Provider>
  </Fragment>,
  document.getElementById('root')
)

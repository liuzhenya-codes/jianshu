import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import Header from './common/header';
import IconfontGlobalStyle from './statics/iconfont/iconfont'
import { GlobalStyle } from './style.js'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontGlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/detail' exact component={Detail} />
        <Route path='/login' exact component={Login} />
      </BrowserRouter>
    </Provider>
  </Fragment>,
  document.getElementById('root')
)

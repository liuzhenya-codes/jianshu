import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import Header from './common/header';
import { GlobalStyle } from './style.js'

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Header />
  </Fragment>,
  document.getElementById('root')
)

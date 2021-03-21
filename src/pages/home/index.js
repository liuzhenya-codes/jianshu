import { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {
  backToTop () {
    window.scrollTo(0, 0)
  }
  render () {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src="https://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.scrollTopShow ? <BackTop onClick={this.backToTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.getHomeData()
    setTimeout(() => {
      window.addEventListener('scroll', () => { this.props.onScroll(this.props.scrollTopShow) })
    }, 100)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', () => {})
  }
}

const mapState = (state) => {
  return {
    scrollTopShow: state.getIn(['home', 'scrollTopShow'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomeData () {
      dispatch(actionCreators.getInitHomeDataAction())
    },
    onScroll (currentShown) {
      const scrollTopShow = window.document.documentElement.scrollTop > 200
      if (scrollTopShow && !currentShown) dispatch(actionCreators.getToggleScrollTop(true))
      if (!scrollTopShow && currentShown) dispatch(actionCreators.getToggleScrollTop(false))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)
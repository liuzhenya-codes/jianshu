import { Component } from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
  Addition,
  Button
} from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

class Header extends Component {
  getListArea () {
    const { list, page, totalPage, focused, mouseIn } = this.props
    const { onHotSearchMouseEnter, onHotSearchMouseLeave, onChangeHotSearchPage } = this.props
    const listToArray = list.toJS()
    const currentPageList = []

    if (listToArray.length) {
      for (let i = (page - 1) * 10; i < (page * 10); i++) {
        const item = listToArray[i]
        item && currentPageList.push(
          <SearchInfoItem key={item}>{item}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={onHotSearchMouseEnter} onMouseLeave={onHotSearchMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {onChangeHotSearchPage(page, totalPage, this.refreshIcon)}}
            >
              <i className='iconfont spin' ref={(refreshIcon) => {this.refreshIcon = refreshIcon}}>&#xe63d;</i>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
           {currentPageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render () {
    const  { list, focused, onSearchFoucs, onSearchBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                onFocus={() => {onSearchFoucs(list)}}
                onBlur={onSearchBlur}
              />
            </CSSTransition>
            <i className={`iconfont zoom ${focused ? 'focused' : ''}`}>&#xe62d;</i>
						{this.getListArea()}
          </SearchWrapper>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className='writting'>
          <i className="iconfont">&#xe61c;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFoucs (list) {
      dispatch(actionCreators.getFoucsSearchAction())
      if (list.size === 0) dispatch(actionCreators.getInitListDataAction())
    },
    onSearchBlur () {
      dispatch(actionCreators.getBlurSearchAction())
    },
    onHotSearchMouseEnter () {
      dispatch(actionCreators.getMouseEnterAction())
    },
    onHotSearchMouseLeave () {
      dispatch(actionCreators.getMouseLeaveAction())
    },
    onChangeHotSearchPage (page, totalPage, refreshIcon) {
      const nextPage = page < totalPage ? page + 1 : 1
      dispatch(actionCreators.getSetPageAction(nextPage))
      const refreshIconDeg = refreshIcon.style.transform.replace(/[^0-9]/ig, '')
      const refreshIconNextDeg = refreshIconDeg ? parseInt(refreshIconDeg) + 360 : 360
      refreshIcon.style.transform = `rotate(${refreshIconNextDeg}deg)`
    },
    getListData () {
      dispatch(actionCreators.getInitListDataAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
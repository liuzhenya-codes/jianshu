import { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
import { withRouter } from 'react-router-dom'
import { actionCreators } from '../store'

class List extends PureComponent {
  constructor (props) {
    super(props)
    this.pushToDetail = this.pushToDetail.bind(this)
  }

  pushToDetail (articleId) {
    this.props.history.push({ pathname: '/detail', query: { articleId } })
  }

  render () {
    return(
      <div>
        {
          this.props.articleList.map((item, index) => {
            return (
              <ListItem onClick={() => this.pushToDetail(item.get('id'))} key={index}>
                <ListInfo>
                  <h2 className='title'>{item.get('title')}</h2>
                  <div className='desc'>{item.get('desc')}</div>
                </ListInfo>
                <img src={item.get('imgUrl')} className='pic' alt='' />
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => this.props.loadMoreArticle(this.props.articlePage)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadMoreArticle (articlePage) {
      dispatch(actionCreators.getLoadMoreAction(articlePage + 1))
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(List))
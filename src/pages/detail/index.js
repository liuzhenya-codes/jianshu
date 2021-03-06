import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends PureComponent {
  render () {
    return(
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }
  componentDidMount () {
    this.props.getDetailData(this.props.location.state.articleId)
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetailData (articleId) {
      dispatch(actionCreators.getDetailData(articleId))
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)
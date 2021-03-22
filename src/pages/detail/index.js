import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreactors } from './store'
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
    this.props.getDetailData(this.props.location.query.articleId)
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
      dispatch(actionCreactors.getDetailData(articleId))
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)
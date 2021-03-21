import { PureComponent } from 'react'
import {
  RecommendWrapper,
  RecommendItem
} from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
  render () {
    return(
      <RecommendWrapper>
        {
          this.props.recommendList.map(item => {
            return (
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapState, null)(Recommend)
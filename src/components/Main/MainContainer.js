import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Main from './Main'

const mapStateToProps = state => ({
    items: state.items,
    item: state.item
})

const mapDispatchToProps = dispatch => ({
    fetchData: id => dispatch(actions.fetchData(id)),
    loadItem: id => dispatch(actions.loadItem(id)),
    showInfo: id => dispatch(actions.showInfo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

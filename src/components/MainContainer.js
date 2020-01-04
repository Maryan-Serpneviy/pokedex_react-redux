import { connect } from 'react-redux'
import Store from '../Store'
import Main from './Main'

const mapStateToProps = state => ({
    items: state.items,
    item: state.item
})

const mapDispatchToProps = dispatch => ({
    loadData: id => dispatch(Store.loadItem(id)),
    showInfo: id => dispatch(Store.showInfo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

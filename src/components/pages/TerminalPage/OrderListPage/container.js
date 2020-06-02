import { connect } from 'react-redux'

import { getOrders } from '@/store/actions/orders'
import { getSorts } from '@/store/actions/sorts'

import OrderListPage from './component'

const mapStateToProps = state => ({
  sorts: state.sorts,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(OrderListPage)

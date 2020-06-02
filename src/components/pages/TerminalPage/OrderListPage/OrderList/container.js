import { connect } from 'react-redux'

import { getOrders } from '@/store/actions/orders'
import { getSorts } from '@/store/actions/sorts'
import { getSearch } from '@/store/actions/search'

import OrderList from './component'

const mapStateToProps = state => ({
  orders: state.orders,
})

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(getOrders()),
  getSorts: () => dispatch(getSorts()),
  getSearch: () => dispatch(getSearch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)

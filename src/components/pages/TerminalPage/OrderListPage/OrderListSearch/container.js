import { connect } from 'react-redux'

import { getSortOrders, getSearchOrders } from '@/store/actions/orders'

import OrderListSearch from './component'

const mapStateToProps = state => ({
  sorts: state.sorts,
  searches: state.search,
})

const mapDispatchToProps = dispatch => ({
  getSortOrders: sort => dispatch(getSortOrders(sort)),
  getSearchOrders: data => dispatch(getSearchOrders(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderListSearch)

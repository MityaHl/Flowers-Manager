import { connect } from 'react-redux'

import { getProducts, clearProducts } from '@/store/actions/products'

import ProductsPage from './component'

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
})

const mapDispatchToProps = dispatch => ({
  getProducts: id => dispatch(getProducts(id)),
  clearProducts: () => dispatch(clearProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)

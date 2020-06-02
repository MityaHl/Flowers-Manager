import { connect } from 'react-redux'

import { getCategories } from '@/store/actions/categories'

import CreateCheckPage from './component'

const mapStateToProps = state => ({
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCheckPage)

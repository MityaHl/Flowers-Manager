import React from 'react'
import { css } from 'aphrodite'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import OneListItem from './components/OneListItem'
import OneProduct from './components/OneProduct'

import styles from './styles'

const ProductsPage = ({ categories, products, getProducts, clearProducts }) => {
  const categoriesContent = () => {
    return categories && categories.map((category, index) => (
      <OneListItem key={category.id} category={category} getProducts={getProducts} />
    ))
  }

  const productsContent = () => {
    return products.map((product, index) => (
      <div key={product.id}>
        <OneProduct key={product.id} product={product} />
      </div>
    ))
  }

  return (
    <div className={css(styles.productPage)}>
      {
        products && (
          <Button
            variant="contained"
            color="primary"
            className={css(styles.productsTitle)}
            onClick={clearProducts}
          >
            Вернуться к категориям
          </Button>
        )
      }
      <div className={css(styles.products)}>
        {
          products
            ? productsContent()
            : categoriesContent()
        }
      </div>
    </div>
  )
}

export default ProductsPage

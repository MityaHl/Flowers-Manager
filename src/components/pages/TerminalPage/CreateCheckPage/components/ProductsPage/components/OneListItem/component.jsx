import React, { useCallback } from 'react'
import { css } from 'aphrodite'

import styles from './styles'

const OneListItem = ({ category, getProducts }) => {
  const getProductsData = useCallback(() => {
    getProducts(category.id)
  })

  return (
    <div
      className={css(styles.oneProductCategory)}
      onClick={getProductsData}
    >
      <img
        className={css(styles.image)}
        src="https://static.tildacdn.com/tild6630-6237-4432-b238-363337633061/-5.jpg"
        alt="" />
      <div className={css(styles.categoryTitle)}>
        {category.name}
      </div>
    </div>
  )
}

export default OneListItem

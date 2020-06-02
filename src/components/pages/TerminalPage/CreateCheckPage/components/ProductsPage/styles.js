import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  productPage: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  products: {
    height: '90%',
    width: '90%',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  productsTitle: {
    marginTop: '10px',
  },
})

import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  selectedProducts: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F4F6F5',
  },
  list: {
    marginTop: '20px',
    width: '96%',
    height: '70%',
    borderBottom: '1px solid grey',
  },
  listItemInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
  },
})

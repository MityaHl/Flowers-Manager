import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  orderList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%',
    height: '90%',
  },
  listItem: {
    height: '30px',
    marginBottom: '20px',
    borderBottom: '1px solid black',
  },
  listItemInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listItemIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginRight: '15px',
  },
})

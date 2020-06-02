import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
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

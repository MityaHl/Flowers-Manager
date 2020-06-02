import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  oneProductCategory: {
    width: '160px',
    height: '180px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ':hover': {
      border: '1px solid black',
      borderRadius: '10px',
    },
  },
  image: {
    maxWidth: '160px',
    minHeight: '150px',
    borderRadius: '10px 10px 0px 0px',
  },
  categoryTitle: {
    width: '100%',
    height: '30px',
    backgroundColor: '#DAE2E1',
    borderRadius: '0px 0px 10px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

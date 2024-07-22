import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },
  flexOne: {
    flex: 1
  },
  bottomView: {
    height: 10,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white'
  },
  eachRow: {
    height: 50,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center'
  },
  rightColumn: {
    flex: 1
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-end'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    fontSize: 16
  }
});

export default Styles;
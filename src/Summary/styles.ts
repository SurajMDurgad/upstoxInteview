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
    padding: 10
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
  },
  triangle: {
    alignSelf: 'center',
    width: 10,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: "#AE50DA",
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});

export default Styles;
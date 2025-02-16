import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
  eachRow: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 10
  },
  symbol: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5
  },
  firstColumn: {
    flex: 0.6
  },
  secondColumn: {
    flex: 0.4,
    alignItems: 'flex-end'
  },
  quantity: {
    fontSize: 14
  },
  boldText: {
    fontWeight: 'bold'
  },
  flatList: {
    paddingBottom: 200
  },
  errorText: {
    alignSelf: 'center',
    paddingTop: 20,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold'
  },
  loader: {
    padding: 20
  }
});

export default Styles;
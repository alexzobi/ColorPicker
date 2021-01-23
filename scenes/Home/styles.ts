import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flexGrow: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Picker: {
    flexGrow: 1,
    minWidth: 300,
    maxWidth: 600,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 20,
      width: 0,
    },
    shadowOpacity: .25,
    shadowRadius: 20,
    padding: 50,
  }
})

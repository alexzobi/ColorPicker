import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    flexGrow: 1,
    paddingVertical: 50,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Picker: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingBottom: 25,
  },
  Picker__Shadow: {
    shadowColor: '#000',
    shadowOffset: {
      height: 20,
      width: 0,
    },
    shadowOpacity: .25,
    shadowRadius: 20,
    width: '100%',
    minWidth: 300,
    maxWidth: 400,
    height: '100%',
  },
  BottomCircle: {
    height: 1000,
    width: 1000,
    borderRadius: 500,
    alignSelf: 'center',
    position: 'absolute',
    top: '85%',
    opacity: .25,
  },
  TopBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#000',
    opacity: .25,
    marginBottom: 15,
  }
})

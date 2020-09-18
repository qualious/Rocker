import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: WIDTH - 150,
    height: 45,
    marginTop: HEIGHT - 550,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: '#333',
    fontSize: 14,
  },
});

export default styles;

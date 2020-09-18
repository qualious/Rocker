import { StyleSheet } from 'react-native';
import { Normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    color: '#666666',
    fontSize: Normalize(14),
    marginLeft: 15,
  },
  example: {
    color: '#888',
    fontSize: Normalize(8),
    marginTop: Normalize(6),
    marginLeft: 5,
  },
  input: {
    height: 45,
    marginHorizontal: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    fontSize: Normalize(14),
    color: '#333333',
    paddingHorizontal: 10,
  },
});

export default styles;

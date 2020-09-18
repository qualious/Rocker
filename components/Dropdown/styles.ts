import { StyleSheet } from 'react-native';
import { Normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    marginTop: 15,
    marginHorizontal: 15,
    alignSelf: 'stretch',
  },
  label: {
    color: '#666666',
    fontSize: Normalize(14),
    marginTop: 15,
    marginBottom: -7,
    marginLeft: 15,
  },
  item: {
    justifyContent: 'flex-start',
  },
  dropdown: {
    borderColor: '#888',
  },
});

export default styles;

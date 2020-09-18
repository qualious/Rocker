import React from 'react';
import { View, Text } from 'react-native';
import { IDropdown } from './interfaces';

// Alternatively: https://github.com/react-native-community/react-native-picker
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

const Dropdown: React.FunctionComponent<IDropdown> = ({
  data,
  loading,
  value,
  onPress,
}) => {
  if (loading || data.length === 0) return <View />;
  console.log('data: ', data);
  return (
    <>
      <Text style={styles.label}>Country</Text>
      <DropDownPicker
        searchable
        searchablePlaceholder="Search for a country"
        placeholder="Select your country"
        items={data}
        defaultValue={value || 'SWE'}
        containerStyle={styles.container}
        dropDownStyle={styles.dropdown}
        style={styles.dropdown}
        itemStyle={styles.item}
        onChangeItem={onPress}
      />
    </>
  );
};

export default Dropdown;

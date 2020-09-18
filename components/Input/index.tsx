import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { IInput } from './interfaces';

import TextInputMask from 'react-native-text-input-mask';
import styles from './styles';

const Input: React.FunctionComponent<IInput> = ({
  label,
  example,
  value,
  mask,
  validator,
  onChangeText,
}) => {
  const [valid, setValid] = useState(true);
  const onChange = (formatted: string, extracted: string) => {
    setValid(validator(mask ? extracted : formatted));
    onChangeText(formatted);
  };
  const borderColor = {
    borderColor: valid ? '#666' : '#ff6666',
  };
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {example && <Text style={styles.example}>{`(${example})`}</Text>}
      </View>
      <TextInputMask
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        value={value}
        mask={mask}
        style={[styles.input, borderColor]}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Input;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { IButton } from './interfaces';
import styles from './styles';

const Button: React.FunctionComponent<IButton> = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;

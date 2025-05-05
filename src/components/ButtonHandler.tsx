import React, { useMemo } from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '../utils/themeContext';
import { AppTheme } from '../utils/themeColors';

const { width } = Dimensions.get('screen');

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled = false,
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        buttonStyle,
        disabled && { opacity: 0.6 },
      ]}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    button: {
      width: width * 0.9, // around 268px depending on screen
      height: 55,
      backgroundColor: theme.primary || '#4B0A6F', // fallback purple
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: 12,
    },
    text: {
      color: theme.background|| '#FFFFFF',
      fontSize: 18,
      fontFamily: 'RobotoSemiBold',
    },
  });

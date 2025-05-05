import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  ImageSourcePropType,
  Pressable,
  TextInputProps,
} from 'react-native';
import React, { useState, useMemo } from 'react';
import { useTheme } from '../utils/themeContext';
import { AppTheme } from '../utils/themeColors';

const { width, height } = Dimensions.get('screen');

type InputProps = {
  title: string;
  icon: ImageSourcePropType;
  placeholder: string;
  rightIcon?: ImageSourcePropType;
  inverseRightIcon?: ImageSourcePropType;
  isPassword?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
} & TextInputProps;

const InputHandler: React.FC<InputProps> = ({
  title,
  icon,
  placeholder,
  rightIcon,
  inverseRightIcon,
  isPassword = false,
  value,
  onChangeText,
  ...rest
}) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [secureText, setSecureText] = useState(isPassword);

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={styles.inputView}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textInputView}>
        <Image source={icon} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.primary}
          style={styles.inputText}
          secureTextEntry={secureText}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
        {isPassword && rightIcon && inverseRightIcon && (
          <Pressable onPress={togglePasswordVisibility} style={styles.rightIconView}>
            <Image
              source={secureText ? inverseRightIcon : rightIcon}
              style={[styles.rightIcon]}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default InputHandler;

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    inputView: {
      backgroundColor: theme.background,
      padding: 10,
      borderRadius: 8,
      width:"95%"
    },
    textInputView: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.primary,
      paddingVertical: 10,
      borderRadius: 7,
      height: height / 12,
    },
    title: {
      color: theme.primary,
      paddingBottom: 10,
      fontSize: 18,
      fontFamily: 'RobotoSemiBold',
    },
    icon: {
      width: 28,
      height: 28,
      resizeMode: 'contain',
      marginHorizontal: 10,
    },
    inputText: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Roboto',
      color: theme.primary,
      paddingHorizontal: 10,
    },
    rightIconView: {
      width: 20,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightIcon: {
      width: 28,
      height: 28,
      resizeMode: 'contain',
    },
  });

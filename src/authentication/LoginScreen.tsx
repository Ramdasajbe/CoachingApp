import React, { useMemo } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../mainnavigator/MainNavigator';

import PrimaryButton from '../components/ButtonHandler';
import InputHandler from '../components/InputHandler';
import { useTheme } from '../utils/themeContext';
import { AppTheme } from '../utils/themeColors';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/LoginScreen/school.png')}
        style={styles.icon}
      />

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subTitle}>Login To Continue</Text>

      <InputHandler
        title="Email Address"
        placeholder="Please enter your email ID"
        icon={require('../assets/inputHandler/email.png')}
      />

      <InputHandler
        title="Password"
        placeholder="Password"
        icon={require('../assets/inputHandler/password.png')}
        rightIcon={require('../assets/inputHandler/eye.png')}
        inverseRightIcon={require('../assets/inputHandler/closeeye.png')}
        isPassword
      />

      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      <PrimaryButton title="LOG IN" onPress={() => navigation.navigate("Home")} />

      <Pressable onPress={() => Alert.alert('Signup flow')}>
        <Text style={styles.signupText}>Don't have an account? Sign up now</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.background,
      paddingHorizontal: 5,
      paddingTop:"20%"
    },
    icon: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
      marginBottom: '4%',
    },
    title: {
      color: theme.primary,
      fontSize: 25,
      fontFamily: 'RobotoSemiBold',
    },
    subTitle: {
      color: theme.primary,
      fontSize: 17,
      fontFamily: 'RobotoSemiBold',
      marginBottom: '15%',
    },
    forgotPassword: {
      color: theme.primary,
      fontSize: 14,
      fontFamily: 'RobotoSemiBold',
      alignSelf: 'flex-end',
      marginRight: '5%',
      marginBottom: '4%',
    },
    signupText: {
      color: theme.primary,
      fontSize: 15,
      fontFamily: 'RobotoSemiBold',
      marginTop: '5%',
    },
  });

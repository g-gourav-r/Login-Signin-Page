import { View,useWindowDimensions ,Text, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();

    const onSignInPressed = () =>{
        console.warn("Sign in")
    }
    const onForgotPasswordPressed = () =>{
        console.warn("onForgotPasswordPressed")
    }
    const onSignUpPressed = () =>{
        console.warn("onSignUpPressed")
    }

    return (
    <View style={styles.root }>
      <Image 
        source={Logo}
        style={[styles.logo, {height: height * 0.3 }]} 
        resizeMode='contain'
        />
        <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
        />
        <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry
        />

        <CustomButton
            text="Sign in"
            onPress={onSignInPressed}
            type="PRIMARY"
        />

        <CustomButton
            text="Forgot Password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
        />
        <CustomButton
            text="Dont' have an account? Create one"
            onPress={onSignUpPressed}
            type="TERTIARY"
        />
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxheight:100,
    },
})
export default SignInScreen
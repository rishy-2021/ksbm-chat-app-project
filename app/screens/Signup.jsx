import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';

export default function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const handleTabPress = () => {
    Keyboard.dismiss();
    input2Ref.current.focus();
  };

  const onHandleLogin = async () => {
    try {
      if (email !== '' || password !== '') {
        setIsLoading(true);
        const authentication = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        if (authentication) {
          setIsLoading(false);
        }
      }
    } catch (error) {
      Alert.alert('Login error', error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={'gray'}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          onSubmitEditing={handleTabPress}
          autoFocus={true}
          value={email}
          ref={input1Ref}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'gray'}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          ref={input2Ref}
          onSubmitEditing={handleTabPress}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onHandleLogin}
          disabled={!email || !password}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>
            {' '}
            Sign Up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'green', fontWeight: '600', fontSize: 14}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  input: {
    color:'#000000',
    backgroundColor: '#F6F7FB',
    height: 58,
    marginBottom: 15,
    fontSize: 20,
    borderRadius: 10,
    padding: 12,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: 'gray',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  }
});

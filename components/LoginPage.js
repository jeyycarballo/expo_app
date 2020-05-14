import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'


function LoginScreen({ navigation }) {

  const [userText, setUserText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const userNameInput = (enteredUserText) => {
    setUserText(enteredUserText)
  }
  const passInput = (enteredPasswordText) => {
    setPasswordText(enteredPasswordText)
  }
  const clicked = () => {
    if (userText == "" || passwordText == "") {
      alert('All fields are required');
    }
    else {
      let params = new URLSearchParams({
        db_identifier: 'UNILEVER',
        username: userText,
        password: passwordText
      })
      const loginurl = 'http://unilever-test.au-syd.mybluemix.net/shepherd/packuserslogin?' + params.toString()

      fetch(loginurl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data.status == 'success') {
            alert('Login Success')
            navigation.navigate('List of Users');
          }
          else{
            alert('Login Failed')
          }
        })
        .catch((error) => {
          alert('Login Failed: ' + error.message);
        });
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder= "USERNAMEEEEE"
        placeholderTextColor= 'black'
        onChangeText={userNameInput}
        value={userText}
      />

      <TextInput
        style={styles.inputField}
        placeholder='Password'
        placeholderTextColor='black'
        onChangeText={passInput}
        value={passwordText}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={clicked} style={styles.btn} activeOpacity={0.6} >
        <Text style={styles.btnText}>Log in</Text>
      </TouchableOpacity>
    </View>

  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f6d55c',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 50
  },
  inputField: {
    padding: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 50,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  btn: {
    backgroundColor: '#173f5f',
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    width: 150,
    alignSelf: 'center',
  },
  btnText: {
    textAlign: "center",
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 18,
  },
});
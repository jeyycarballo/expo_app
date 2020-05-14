import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

const UserInput = (props) => {

    const [userText, setUserText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [firstNameText, setFirstNameText] = useState('');
    const [lastNameText, setLastNameText] = useState('');
    const [addressText, setAddressText] = useState('');
    const [contactText, setContactText] = useState('');
    
    const userNameInput = (enteredUserText) => {
        setUserText(enteredUserText)
    }
    const passInput = (enteredPasswordText) => {
        setPasswordText(enteredPasswordText)
    }
    const firstNameInput = (enteredFirstNameText) => {
        setFirstNameText(enteredFirstNameText)
    }
    const lastNameInput = (enteredLastNameText) => {
        setLastNameText(enteredLastNameText)
    }
    const addressInput = (enteredAddressText) => {
        setAddressText(enteredAddressText)
    }
    const contactInput = (enteredContactText) => {
        setContactText(enteredContactText)
    }

    let data = [userText, passwordText, firstNameText,
        lastNameText, addressText, contactText];

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputField}
                placeholder='Username'
                placeholderTextColor='black'
                onChangeText={userNameInput}
                value={userText}
            />

            <TextInput
                style={styles.inputField}
                placeholder= "Password"
                placeholderTextColor= 'black'
                onChangeText={passInput}
                value={passwordText}
                secureTextEntry={true}
            />

            <TextInput
                style={styles.inputField}
                placeholder= "First name"
                placeholderTextColor= 'black'
                onChangeText={firstNameInput}
                value={firstNameText}
            />

            <TextInput
                style={styles.inputField}
                placeholder= "Last name"
                placeholderTextColor= 'black'
                onChangeText={lastNameInput}
                value={lastNameText}
            />

            <TextInput
                style={styles.inputField}
                placeholder= "Address"
                placeholderTextColor= 'black'
                onChangeText={addressInput}
                value={addressText}
            />

            <TextInput
                style={styles.inputField}
                placeholder= "Contact Number"
                placeholderTextColor= 'black'
                onChangeText={contactInput}
                value={contactText}
                keyboardType='phone-pad'
            />
            <TouchableOpacity onPress={props.onClick.bind(this, data)}
                style={styles.btn}
                activeOpacity={0.6} >
            <Text style={styles.btnText}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View >
    );
}

export default UserInput;

const styles = StyleSheet.create({
    inputField: {
        padding: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    btn: {
        width: 150,
        backgroundColor: '#20639b',
        height: 40,
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center'
    },
    btnText: {
        textAlign: "center",
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 18,
    },
})
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import UserInput from './UserInput';


function AddUserScreen({ navigation }) {
    const clicked = (props) => {
        console.log(props)
        for (let index = 0; index < props.length; index++) {
            const element = props[index];
            if (element == "") {
                alert('All fields are required');
                return;
            }
        }

        const userData = {
            "db_identifier": "UNILEVER",
            "username": props[0],
            "password": props[1],
            "firstname": props[2],
            "lastname": props[3],
            "address": props[4],
            "contact_number": props[5]
        };
        console.log(userData);
        fetch('http://unilever-test.au-syd.mybluemix.net/shepherd/packusers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.status + ": " + data.message);
                console.log(data);
                if (data.status == 'success') {
                    alert('User successfully added')
                    navigation.goBack()
                }
                else {
                    alert(data.message)
                }
            })
            .catch((error) => {
                alert('Sign up Failed: ' + error.message);
            });
    }

    btnText={text: 'Submit'}

    return (
        <View style={styles.container}>
        <UserInput buttonText={btnText.text} onClick={clicked} />
        </View>
    );
};

export default AddUserScreen;

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
});
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';


export default function EditUserScreen({ route, navigation }) {
    const { username } = route.params;
    const { firstname } = route.params;
    const { lastname } = route.params;
    const { address } = route.params;
    const { contact_number } = route.params;

    const [firstNameText, setFirstNameText] = useState(firstname);
    const [lastNameText, setLastNameText] = useState(lastname);
    const [addressText, setAddressText] = useState(address);
    const [contactText, setContactText] = useState(contact_number);

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


    const clicked = () => {
        const putData = {
            db_identifier: 'UNILEVER',
            username: username,
            firstname: firstNameText,
            lastname: lastNameText,
            address: addressText,
            contact_number: contactText
        };
        console.log(putData);

        fetch("http://unilever-test.au-syd.mybluemix.net/shepherd/packusers", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(putData),
        })
            .then((response) => response.json())

            .then((data) => {
                console.log(data);
                if (data.status == "success") {
                    alert(data.message);   
                    navigation.goBack()         
                }
                else{
                    alert(data.message)
                }
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };




    return (

        <View style={styles.container}>
            <TextInput
                style={styles.inputField}
                onChangeText={firstNameInput}
                value={firstNameText}
            />

            <TextInput
                style={styles.inputField}
                onChangeText={lastNameInput}
                value={lastNameText}
            />

            <TextInput
                style={styles.inputField}
                onChangeText={addressInput}
                value={addressText}
            />

            <TextInput
                style={styles.inputField}
                onChangeText={contactInput}
                value={contactText}
                keyboardType='phone-pad'
            />
            <TouchableOpacity onPress={clicked}
                style={styles.btn}
                activeOpacity={0.6} >
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            
        </View>
    );
};


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
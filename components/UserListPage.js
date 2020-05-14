import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Button } from "react-native";


export default function UserListPage({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let nullData = true;
    if (data.length != 0) {
        nullData = false;
    }

    useEffect(() => navigation.addListener('focus', () => setLoading(true)), []);

    let params = new URLSearchParams({
        db_identifier: 'UNILEVER'
    })
    const url = 'http://unilever-test.au-syd.mybluemix.net/shepherd/packusers?';
    const getURL = url + params.toString()

    useEffect(() => {
        fetch(getURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((json) => {
                setData(json.return);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [isLoading]);

    const onDelete = key => {
        params.append('username', key)
        url1 = url + params.toString()
        fetch(url1, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                if (data.status == "success") {
                    alert(data.message);
                    setLoading(true);
                }
                else {
                    alert(data.message)
                }
            }).catch((err) => alert(err))
    }

    return (
        <View style={{ flex: 9, paddingVertical: 10 }}>
            {isLoading ? <ActivityIndicator /> :
                (nullData ?
                    <Text style={styles.noData}>
                        No Items Available
                </Text> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ username }, index) => username}
                            renderItem={({ item }) => (

                                <View style={styles.infoBox} >
                                    <View style={styles.userInfo} >
                                        <Text>{item.firstname} {item.lastname}</Text>
                                        <Text>{item.address}</Text>
                                        <Text>{item.contact_number}</Text>
                                    </View>

                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        style={styles.btn, styles.delete}
                                        onPress={() => navigation.navigate('Edit User', item)}
                                    >
                                        <Text style={styles.btntext} >EDIT</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        style={styles.btn, styles.edit}
                                        onPress={onDelete.bind(this, item.username)}
                                    >
                                        <Text style={styles.btntext} >DELETE</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    )
                )

            }
            <Button title='add user' onPress={() => navigation.navigate('Add User')} />
        </View >
    );
}



const styles = StyleSheet.create({
    infoBox: {
        backgroundColor: '#f6d55c',
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 2,
        marginHorizontal: 20,
    },
    userInfo: {
        margin: 5,
        flex: 3,
        flexDirection: 'column',
    },
    infoText: {
        fontSize: 10,
    },
    btn: {
        alignContent: 'center',
        alignSelf: 'center',
    },
    edit: {
        backgroundColor: '#ed553b',
    },
    delete: {
        backgroundColor: '#3caea3',
    },
    btntext: {
        flex: 1,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
        padding: 8,
    },
    noData: {
        flex: 1,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
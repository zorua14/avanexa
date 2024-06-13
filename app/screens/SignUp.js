import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const SignUp = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const handlesubmit = () => {

        if (email === '' || password === '' || name === '' || phone === '') {
            Alert.alert('Error', 'Fill all fields');
            return;

        } else {
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://img.freepik.com/free-photo/top-view-fried-potatoes-with-seasonings-bread-loafs-different-vegetables-dark-desk_140725-115312.jpg?t=st=1718268537~exp=1718272137~hmac=c92e84717347f9d9b39dc11259f5faf8a78958216686615fe6bfc30fb8ef512b&w=1060' }} style={styles.image} />

            </View>
            <Text style={styles.title}>SIGN UP</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Phone Number" style={styles.input} value={phone} onChangeText={setPhone} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handlesubmit}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.socialText}>Or via social media</Text>
            <View style={styles.socialContainer}>
                <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.socialIcon} />
                <FontAwesome name="google-plus" size={24} color="#db4a39" style={styles.socialIcon} />
                <FontAwesome name="instagram" size={24} color="#C13584" style={styles.socialIcon} />
                <FontAwesome name="twitter" size={24} color="#1DA1F2" style={styles.socialIcon} />
            </View>
        </View>
    );

}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    imageContainer: {

        justifyContent: 'center', alignItems: 'center',
        marginVertical: 20,

    },
    image: {
        width: 240,
        height: 120,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#ff4757',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    socialText: {
        textAlign: 'center',
        marginVertical: 10,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socialButton: {
        backgroundColor: '#3b5998',
        padding: 10,
        borderRadius: 5,
    },
    socialButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
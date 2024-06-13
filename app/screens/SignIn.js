import { Alert, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()
    const handleLogin = () => {
        // Check if email and password are not empty
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert('Error', 'Email and password cannot be empty.');
            return;
        }

        // Dummy login function
        if (email.length > 0 && password.length > 0) {
            // Alert.alert('Login Successful', `Welcome, ${email}!`);
            navigation.navigate('Home')
        } else {
            Alert.alert('Login Failed', 'Invalid email or password.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image source={{
                uri: 'https://img.freepik.com/free-photo/top-view-fried-potatoes-with-seasonings-bread-loafs-different-vegetables-dark-desk_140725-115312.jpg?t=st=1718268537~exp=1718272137~hmac=c92e84717347f9d9b39dc11259f5faf8a78958216686615fe6bfc30fb8ef512b&w=1060',
            }} style={styles.image} />
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputContainer}>
                <MaterialIcons name="email" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="eye" size={24} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or via social media</Text>
            <View style={styles.socialContainer}>
                <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.socialIcon} />
                <FontAwesome name="google-plus" size={24} color="#db4a39" style={styles.socialIcon} />
                <FontAwesome name="instagram" size={24} color="#C13584" style={styles.socialIcon} />
                <FontAwesome name="twitter" size={24} color="#1DA1F2" style={styles.socialIcon} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>
                    Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    forgotPassword: {
        color: 'gray',
        textAlign: 'right',
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: '#ff3b30',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        color: 'gray',
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    socialIcon: {
        marginHorizontal: 10,
    },
    signUpText: {
        textAlign: 'center',
        color: 'gray',
    },
    signUpLink: {
        color: '#ff3b30',
        fontWeight: 'bold',
    },
})
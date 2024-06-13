import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const welcome = () => {
    const navigation = useNavigation()
    return (

        <ImageBackground source={{ uri: "https://img.freepik.com/free-photo/vegetables-forming-space-middle_23-2147681427.jpg?t=st=1718266613~exp=1718270213~hmac=1bbb14f272d7d1fef4fae7607747e30e77e1aa9a435c636e6c7e16982ca1a697&w=360" }} style={styles.background}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.subtitle}>Discover the best foods from over 3000+ restaurants</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Intro')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>


    )
}

export default welcome

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    textContainer: {
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
})
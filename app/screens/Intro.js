import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Intro = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {/* Top center content */}
            <View style={styles.topCenter}>
                <Text style={styles.text}>Unmatched Reliability</Text>
                <Text style={{ fontSize: 16 }}>Tracking Order RealTime</Text>
                <Image
                    source={{
                        uri: 'https://img.freepik.com/free-photo/top-view-fried-potatoes-with-seasonings-bread-loafs-different-vegetables-dark-desk_140725-115312.jpg?t=st=1718268537~exp=1718272137~hmac=c92e84717347f9d9b39dc11259f5faf8a78958216686615fe6bfc30fb8ef512b&w=1060',
                    }}
                    style={styles.image}
                />
            </View>

            {/* Bottom center content */}
            <View style={styles.bottomCenter}>
                <Text style={{ fontSize: 18, marginBottom: 100 }}>Experience Peace of Mind while tracking orders</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{ width: 200, height: 50, backgroundColor: "red", alignContent: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                    <Text style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 18, color: 'white' }}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    bottomCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,  // Adjust margin as needed
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    image: {
        width: 300, // specify desired width
        height: 200, // specify desired height
        resizeMode: 'center', // or 'contain' or 'stretch' or 'center'
    },
})
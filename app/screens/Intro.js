import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Intro = () => {
    return (
        <View style={styles.container}>
            {/* Top center content */}
            <View style={styles.topCenter}>
                <Text style={styles.text}>Unmatched Reliability</Text>
                <Text style={{ fontSize: 16 }}>Tracking Order RealTime</Text>
                <Image source={{ uri: "" }} style={{ width: 200, height: 200 }} />
            </View>

            {/* Bottom center content */}
            <View style={styles.bottomCenter}>
                <Text style={{ fontSize: 18, marginBottom: 100 }}>Experience Peace of Mind while tracking orders</Text>
                <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: "red", alignContent: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
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
    },
    bottomCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,  // Adjust margin as needed
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
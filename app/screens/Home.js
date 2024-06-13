import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native'
import React from 'react'
import { Feather, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    const cuisines = [
        { id: '1', title: 'PIZZA', image: 'https://example.com/pizza.jpg' },
        { id: '2', title: 'BIRIYANI', image: 'https://example.com/biriyani.jpg' },
    ];

    const restaurants = [
        { id: '1', name: 'HAVEN Riverfront', cuisine: 'Contemporary American', image: 'https://example.com/restaurant1.jpg' },
        { id: '2', name: 'Beef & Beer', cuisine: 'Burger', image: 'https://example.com/restaurant2.jpg' },
    ];

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Home</Text>
            </View>
            <View style={styles.searchContainer}>
                <Feather name="search" size={20} color="#ff4757" />
                <TextInput placeholder="Search Restaurants" style={styles.searchInput} />
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Browse by cuisine</Text>
                <TouchableOpacity style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={cuisines}
                renderItem={({ item }) => (
                    <View style={styles.cuisineCard}>
                        <Image source={{ uri: "https://img.freepik.com/free-photo/top-view-fried-potatoes-with-seasonings-bread-loafs-different-vegetables-dark-desk_140725-115312.jpg?t=st=1718268537~exp=1718272137~hmac=c92e84717347f9d9b39dc11259f5faf8a78958216686615fe6bfc30fb8ef512b&w=1060" }} style={styles.cuisineImage} />
                        <View style={{ borderColor: "gray", borderWidth: 1, height: 40, marginTop: 3, width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <Text style={styles.cuisineTitle}>{item.title}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Favourite Restaurants</Text>
                <TouchableOpacity style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}>
                    <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={restaurants}
                renderItem={({ item }) => (
                    <View style={styles.restaurantCard}>
                        <Image source={{ uri: 'https://img.freepik.com/free-photo/top-view-fried-potatoes-with-seasonings-bread-loafs-different-vegetables-dark-desk_140725-115312.jpg?t=st=1718268537~exp=1718272137~hmac=c92e84717347f9d9b39dc11259f5faf8a78958216686615fe6bfc30fb8ef512b&w=1060' }} style={styles.restaurantImage} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={styles.restaurantInfo}>
                                <Text style={styles.restaurantName}>{item.name}</Text>
                                <Text style={styles.restaurantCuisine}>{item.cuisine}</Text>
                            </View>
                            <AntDesign name="hearto" size={24} color="red" />
                        </View>

                    </View>
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>

    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 15
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    searchInput: {
        marginLeft: 10,
        flex: 1,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        color: 'white',
        fontWeight: 'bold',
    },
    cuisineCard: {
        alignItems: 'center',
        marginRight: 10,
    },
    cuisineImage: {
        width: 250,
        height: 250,
        borderRadius: 10,
    },
    cuisineTitle: {
        marginTop: 5,
        fontWeight: 'bold',
    },
    restaurantCard: {
        marginRight: 10,

    },
    restaurantImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    restaurantInfo: {
        marginTop: 5,

    },
    restaurantName: {
        fontWeight: 'bold',
    },
    restaurantCuisine: {
        color: '#555',
    },
})
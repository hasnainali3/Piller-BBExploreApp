import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"

export const ListItem = ({ item, index, openDetail }) => {
    return <TouchableOpacity onPress={() => openDetail(item)} activeOpacity={0.8} style={styles.listItem}>
        <Image source={{ uri: item.img }} style={styles.img} />
        <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderRadius: 8
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    name: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '500'
    }
});
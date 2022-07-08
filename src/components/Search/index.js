import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export function Search({ placeHolder = 'search', onSearch = (text) => { }, rightComponent }) {
    return (
        <View style={styles.searchView}>
            <TextInput onChangeText={onSearch} style={styles.searchInput} placeholder={placeHolder} />
            {rightComponent}
        </View>
    )
}

const styles = StyleSheet.create({
    searchView: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    searchInput: {
        padding: 10,
        flex: 1
    }
})
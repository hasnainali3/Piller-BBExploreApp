import { Image, StyleSheet, Text, View } from 'react-native';

export default function CharacterDetail({ route, navigation }) {
    const { actor } = route.params
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' source={{ uri: actor.img }} style={styles.img} />
            <Text style={styles.name}>{actor.name}</Text>

            <Text style={styles.detail}>Details</Text>
            <View style={styles.item}>
                <Text>occupation:</Text>
                <Text style={styles.name}>{actor.occupation.toString()}</Text>
            </View>

            <View style={styles.item}>
                <Text>status:</Text>
                <Text style={styles.name}>{actor.status}</Text>
            </View>

            <View style={styles.item}>
                <Text>Season appearance:</Text>
                <Text style={styles.name}>{actor.appearance.toString()}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 0.2
    },
    name: {
        fontWeight: '500',
        fontSize: 15,
        padding: 5,
    },
    item: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        borderColor: '#ccc'
    },
    detail: {
        fontWeight: '700',
        fontSize: 25,
        margin: 20,
        textDecorationLine: 'underline'
    }
});

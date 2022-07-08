import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Modal, Text } from 'react-native';
import { getCharacterListing } from '../../api/characterListing';
import { ListItem } from '../../components/ListItem';
import { Search } from '../../components/Search';
import { SEASON_LIST } from '../../constants';

export default function App({ navigation }) {
    const [characterList, setCharacterList] = useState([])
    const [characterListCopy, setCharacterListCopy] = useState([])
    const [loading, setLoading] = useState(false)
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        async function getListing() {
            try {
                const data = await getCharacterListing()
                setCharacterList(data)
                setCharacterListCopy(data)
                setLoading(true)
            } catch (error) {
                console.log(error);
                setLoading(true)
            }
        }
        getListing()
    }, [])

    const renderItem = useCallback(({ item, index }) => {
        return <ListItem item={item} index={index} openDetail={openDetail} />
    }, [openDetail])

    const ItemSeparatorComponent = useCallback(() => {
        return <View style={{ height: 10 }} />
    }, [])

    const openDetail = useCallback((item) => {
        navigation.navigate('Detail', { actor: item })
    }, [navigation])

    const onSearch = useCallback((text) => {
        const result = characterListCopy.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
        setCharacterList(result)
    }, [])

    const searchBySeason = useCallback((season) => {
        if (!season) {
            setCharacterList(characterListCopy)
        } else {
            const result = characterListCopy.filter(item => item.appearance.includes(season))
            setCharacterList(result)
        }
        setShowFilter(false)
    }, [])

    const rightComponent = <TouchableOpacity onPress={() => setShowFilter(true)}>
        <Image source={require('../../../assets/images/filter.png')} style={styles.filterIcon} />
    </TouchableOpacity>

    if (!loading) return <ActivityIndicator />

    return (
        <SafeAreaView style={styles.container}>
            <Search
                onSearch={onSearch}
                rightComponent={rightComponent}
            />
            <FlatList
                data={characterList}
                keyExtractor={(item, ind) => `list_${item.chat_id}_${ind}`}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 10 }}
                ItemSeparatorComponent={ItemSeparatorComponent}
            />


            {/* Season filter Modal */}
            <Modal
                visible={showFilter}
                animationType='slide'
            >
                <SafeAreaView style={styles.modalView}>
                    <View style={{ padding: 20 }}>
                        <TouchableOpacity onPress={() => setShowFilter(false)}>
                            <Text style={styles.close}>x</Text>
                        </TouchableOpacity>
                        <Text style={styles.seasonTitle}>Select Season</Text>
                        <FlatList
                            data={SEASON_LIST}
                            renderItem={({ item }) => (<TouchableOpacity onPress={() => searchBySeason(item)} style={styles.seasonItem}>
                                <Text>{item}</Text>
                            </TouchableOpacity>)}
                            ItemSeparatorComponent={ItemSeparatorComponent}
                            ListHeaderComponent={ItemSeparatorComponent}
                        />
                        <TouchableOpacity onPress={() => searchBySeason('')}>
                            <Text style={styles.seasonTitle}>Clear Filter</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    filterIcon: { height: 30, width: 30 },
    modalView: {
        backgroundColor: '#FFF'
    },
    close: { fontSize: 40, color: '#000', textAlign: 'right', padding: 20 },
    seasonTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    seasonItem: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderRadius: 8
    }
});

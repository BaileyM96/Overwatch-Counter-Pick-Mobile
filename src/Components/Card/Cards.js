import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native";
import { damageCharacters, tankCharacters, supportCharacters } from "../Classes/Characters";


export default function Cards() {

    return (
            <ScrollView>
                <View style={styles.classContainer}>
                    <Text style={styles.classHeader}>Damage</Text>
                </View>

                <View style={styles.characterContainer}>
                    {damageCharacters.map(damage => (
                        <View style={styles.mainCard}>
                            <View style={styles.cardImage}>
                                <Image source={damage.image} />
                            </View>
                            <Text style={styles.cardName}>{damage.name}</Text>
                        </View>
                    ))} 
                </View>

                <View style={styles.classContainer}>
                    <Text style={styles.classHeader}>Tank</Text>
                </View>

                <View style={styles.characterContainer}>
                    {tankCharacters.map(tank => (
                        <View style={styles.mainCard}>
                            <View style={styles.cardImage}>
                                <Image source={tank.image} />
                            </View>
                            <Text style={styles.cardName}>{tank.name}</Text>
                        </View>
                    ))} 
                </View>

                <View style={styles.classContainer}>
                    <Text style={styles.classHeader}>Support</Text>
                </View>

                <View style={styles.characterContainer}>
                    {supportCharacters.map(support => (
                        <View style={styles.mainCard}>
                            <View style={styles.cardImage}>
                                <Image source={support.image} />
                            </View>
                            <Text style={styles.cardName}>{support.name}</Text>
                        </View>
                    ))} 
                </View>
            </ScrollView>
    )
};

const styles = StyleSheet.create({
    classContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    classHeader: {
        fontSize: 20,
        color: 'white',
    }, 
    characterContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        rowGap: 16,
        columnGap: 16,
    },
    mainCard: {
        height: 216,
        width: 167,
        textAlign: "center",
    },
    cardImage: {
        width: 167,
        height: 167,
        backgroundColor: '#cfcfcf'
    },
    cardName: {
        width: 167,
        height: 49.12,
        backgroundColor: 'white',
        color: 'black',
        fontWeight: "bold",
    }
})


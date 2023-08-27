import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/images/image_93.png')} />
            <Text style={styles.title}>Overwatch Counter</Text>
            <Text style={styles.message}>Choose who you want to counter</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30

    },
    title: {
        color: 'white',
        fontSize: 32,
        paddingTop: 25,
    },
    message: {
        fontSize: 24,
        color: 'white',
        paddingTop: 25
    }
})
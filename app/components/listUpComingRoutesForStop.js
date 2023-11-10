import { Text, View, SectionList, StyleSheet, SafeAreaView } from "react-native"

function BodySection(item) {
    return (
        <View style={styles.bodySectionList}>
            <Text style={styles.bodySectionListItem}>{item.item.TripDestination}</Text>
            <Text style={styles.bodySectionListItem}>{item.item.TripStartTime}</Text>
        </View>
    )
}

export default function ListUpComingRoutesForStop({ routesInfo }) {
    return (
        <SafeAreaView>
            {
                routesInfo.length > 0 &&
                <SectionList
                    sections={routesInfo}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <BodySection item={item} />
                    )}
                    renderSectionHeader={({ section: { header } }) => (
                        <Text style={styles.listHeader}>{header}</Text>
                    )}
                />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listHeader: {
        fontWeight: "300",
        borderWidth: 1,
        borderColor: '#20232a',
        borderRadius: 4,
        padding: 5,
        marginTop: 10,
        fontSize: 20,
        backgroundColor: "#fff"
    },
    bodySectionListItem: {
        padding: 2,
        fontWeight: "300",
    },
    bodySectionList: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#20232a',
        borderRadius: 2,
        padding: 5,
        justifyContent: "space-between"
    }
})
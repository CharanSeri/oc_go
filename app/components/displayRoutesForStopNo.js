import { useEffect, useState } from "react"
import { SafeAreaView, Text, View, FlatList, StyleSheet, SectionList } from "react-native"


function ListItem(item) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.routeNo}</Text>
            <Text style={styles.listItemText}>{item.item.TripDestination}</Text>
            <Text style={styles.listItemText}>{item.item.TripStartTime}</Text>
        </View>
    )
}

function OneWayRoutesForStop({ routeDetails, routeNo }) {
    return (
        <SafeAreaView style={styles.container}>
            {
                routeDetails.Trip !== undefined &&
                <FlatList
                    data={routeDetails.Trip}
                    renderItem={({ item }) => (
                        <ListItem item={item} routeNo={routeNo} />
                    )}
                />
            }
        </SafeAreaView>

    )
}

function TwoWayRoutesForStop(routeDetails) {

    const [reducedRoutes, setReducedRoutes] = useState([])

    useEffect(() => {
        function reduceFetchDataAndUpdateState(routes) {
            let sectionListArray = []
            sectionListArray = routes.reduce(
                (initial, updated) => {
                    initial.push({ header: updated.RouteNo + "," + updated.RouteLabel, data: updated.Trips.Trip })
                    return initial
                }, [])
            setReducedRoutes(sectionListArray)
        }
        reduceFetchDataAndUpdateState(routeDetails.routeDetails)
    }, [routeDetails])

    return (
        <View style={styles.container}>
            {
                reducedRoutes.length > 0 &&
                <SectionList
                    sections={reducedRoutes}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.bodySectionList}>
                            <Text style={styles.bodySectionListItem}>{item.TripDestination}</Text>
                            <Text style={styles.bodySectionListItem}>{item.TripStartTime}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { header } }) => (
                        <Text style={styles.listHeader}>{header}</Text>
                    )}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems:"center",
        justifyContent: "space-around",
        borderWidth: 1,
        borderColor: '#20232a',
        borderRadius: 4,
        backgroundColor: "#fff",
        marginTop: 10,

    },
    listItemText: {
        padding: 8,
        fontSize: 20,
    },
    listHeader: {
        fontWeight: "bold",
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
        fontWeight: "bold",
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

export { OneWayRoutesForStop, TwoWayRoutesForStop }

import { View, Text, FlatList, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"

export default function StopNumberRoutesDetails({ stopNumberDetails }) {

    const Item = ({ route }) => (
        <Link href={{
            pathname: "/getNextThreeTripsForStopNumberAndRouteNo",
            params: {
                stopNumber: stopNumberDetails.GetRouteSummaryForStopResult.StopNo,
                routeNumber: route.RouteNo,
                routeHeaded: route.RouteHeading
            }
        }}
            asChild style={styles.shadowProp}>
            <Pressable style={styles.routeDetails}>
                <View>
                    <Text>{route.RouteHeading}</Text>
                    <Text>{route.RouteNo}</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} />
            </Pressable>
        </Link>
    );

    return (
        <SafeAreaView>
            {stopNumberDetails &&
                <View>
                    <View style={styles.stopViewHeader}>
                        <Text>{stopNumberDetails.GetRouteSummaryForStopResult.StopDescription}</Text>
                        <Text>{stopNumberDetails.GetRouteSummaryForStopResult.StopNo} </Text>
                    </View>
                    <FlatList
                        data={stopNumberDetails.GetRouteSummaryForStopResult.Routes.Route}
                        renderItem={({ item }) => <Item route={item} />}
                    />
                </View>
            }
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    stopViewHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1,
        padding: 5,
        marginVertical: 10,
        backgroundColor:"#fff"
    },
    routeDetails: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "black",
        borderWidth: 1,
        padding: 2,
        marginVertical: 2,
    },
    routeDetailsInfo: {
        fontWeight: "light"
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

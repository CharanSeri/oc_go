import { View, Text, FlatList, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"

export default function StopNumberRoutesDetails({ stopNumberDetails }) {

    if (stopNumberDetails !== null) {
        console.log(stopNumberDetails.GetRouteSummaryForStopResult)
    }

    const Item = ({ route }) => (
        <Link href={{
            pathname: "/getNextThreeTripsForStopNumberAndRouteNo",
            params: {
                stopNumber: stopNumberDetails.GetRouteSummaryForStopResult.StopNo,
                routeNumber: route.RouteNo,
                routeHeaded: route.RouteHeading
            }
        }}
            style={{ marginVertical: 10 }} asChild>
            <Pressable style={styles.routeDetails}>
                <View>
                    <Text style={{
                        color: "#fff",
                    }}>{route.RouteHeading}</Text>
                    <Text style={{
                        color: "#fff",
                    }}>{route.RouteNo}</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} style={{ color: "#fff" }} />
            </Pressable>
        </Link>
    );

    return (
        <SafeAreaView>
            {stopNumberDetails &&
                <View>
                    <View style={styles.stopViewHeader}>
                        <Text style={{ textAlign: "center" }}>{stopNumberDetails.GetRouteSummaryForStopResult.StopDescription}</Text>
                        <Text style={{ textAlign: "center" }}>{stopNumberDetails.GetRouteSummaryForStopResult.StopNo} </Text>
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
        flexDirection: "column",
        borderWidth: 2,
        textAlign: "center",
        padding:5,
        marginVertical: 10
    },
    routeDetails: {
        backgroundColor: "grey",
        borderColor: "black",
        borderWidth: 2,
        padding: 2,
        marginVertical: 2
    }
})

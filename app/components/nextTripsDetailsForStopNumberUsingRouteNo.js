import { View, Text, StyleSheet, SectionList, SafeAreaView, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { OneWayRoutesForStop, TwoWayRoutesForStop, OneRouteOneWay } from "./displayRoutesForStopNo"

export default function NextTripsDetailsForStopNumberUsingRouteNo({ tripDetails }) {

    let routes = tripDetails.GetNextTripsForStopResult.Route.RouteDirection

    const [oneWayRoutes, setOneWayRoutes] = useState([])
    const [twoWayRoutes, setTwoWayRoutes] = useState([])
    const [oneWayOneRoute, setOneWayOneRoute] = useState({})

    useEffect(() => {
        function updateRoutes(routes) {
            if (routes.Trips !== undefined) {
                if (routes.Trips.Trip.length !== undefined) {
                    console.log("We found one way routes -->", routes.Trips)
                    setOneWayRoutes(routes.Trips)
                }
                else if (routes.Trips.Trip.TripStartTime !== undefined) {
                    console.log("We found one way routes one route -->", routes.Trips.Trip)
                    setOneWayOneRoute(routes.Trips.Trip)
                }
                else {
                    console.log("We Found no routes -->", routes.Trips)
                }
            } else if (routes.length !== undefined) {
                console.log("We Found two way routes -->", routes)
                setTwoWayRoutes(routes)
            } else {
                console.log("We Found no routes -->", routes)
            }
        }
        updateRoutes(routes)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{tripDetails.GetNextTripsForStopResult.StopNo}</Text>
                <Text style={styles.headerText}>{tripDetails.GetNextTripsForStopResult.StopLabel}</Text>
            </View>
            <OneWayRoutesForStop routeDetails={oneWayRoutes} routeNo={routes.RouteNo} />
            <TwoWayRoutesForStop routeDetails={twoWayRoutes} />
            <OneRouteOneWay trip={oneWayOneRoute} routeNo={routes.RouteNo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    headerTextContainer: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        fontWeight: "light",
        justifyContent: "space-around",
        marginVertical: 10,
        backgroundColor: "#fff",
        minWidth: "50%",
    },
    headerText: {
        fontWeight: "bold",
        padding: 5,
        fontSize: 20,
    }

})
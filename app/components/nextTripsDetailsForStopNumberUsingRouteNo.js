import { View, Text, StyleSheet, SectionList, SafeAreaViewView, FlatList } from "react-native";
import { useLocalSearchParams } from 'expo-router';


export default function NextTripsDetailsForStopNumberUsingRouteNo({ tripDetails }) {
    let routes = tripDetails.GetNextTripsForStopResult.Route.RouteDirection
    if (routes.Trips !== undefined) {
        console.log("One way routes -->", routes.Trips)
        if (routes.Trips.Trip.length == 0) {
            console.log(routes.Trips.Trip)
        }
        else {
            console.log(routes)
        }
    }
    else if (routes.RouteNo == "") {
        console.log("No routes")
    }
    else {
        console.log("Two way routes -->")
        routes.forEach(element => {
            console.log(element)
        });
    }

    let RenderRoutTimes = ({ data }) => (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View >
                        <Text>{item.TripStartTime}</Text>
                    </View>
                )}
            />
        </View>
    )


    return (
        <View>
            <View style={styles.headerContainer}>
                <Text>{tripDetails.GetNextTripsForStopResult.StopNo}</Text>
                <Text>{tripDetails.GetNextTripsForStopResult.StopLabel}</Text>
            </View>
            {
                routes.RouteNo == ""
                    ?
                    <Text> There are no upcomeing Buses</Text>
                    :
                    <View>
                        <Text>Looking Up</Text>
                        {/* <FlatList
                            data={routes}
                            renderItem={({ item }) => (
                                <View >
                                    <Text>{item.RouteNo + "" + item.RouteLabel}</Text>
                                    <RenderRoutTimes data={item.Trips.Trip} />
                                </View>
                            )} /> */}
                    </View>
            }

            {/* {
                routes != undefined ?
                    <SectionList
                        sections={routes}
                        renderItem={({ item }) => <Text>{item}</Text>}
                    /> 
                    :
                    <Text>No routes</Text>
            } */}
            {/* <SectionList
                sections={routes}
                renderItem={({ item }) => <Text>{item}</Text>}
            /> */}
            {/* {
                'Trips' in tripDetails.GetNextTripsForStopResult.Route.RouteDirection ?
                    <SectionList
                        sections={tripDetails.GetNextTripsForStopResult.Route.RouteDirection}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.RouteLabel + item.RouteNo}</Text>
                            </View>
                        )}
                        renderSectionHeader={({ section: { RouteLabel } }) => (
                            <Text >{RouteLabel}</Text>
                        )}
                    />
                    :
                    <Text>No Trip details to be found</Text>
            } */}
            {/* <SectionList
                sections={tripDetails.GetNextTripsForStopResult.Route.RouteDirection.Trips.Trip}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View >
                        <Text >{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { TripDestination } }) => (
                    <Text >{TripDestination}</Text>
                )}
            /> */}
        </View>

    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})
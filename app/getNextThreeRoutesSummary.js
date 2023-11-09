import axios from 'axios';
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { useState } from 'react';
import { useKeyTokenData } from "./context/appKeyTokenData";
import ListUpComingRoutesForStop from "./components/listUpComingRoutesForStop"

export default function GetNextThreeRoutesSummary() {

    const [routesData, setRoutesData] = useState([])
    const [stopLookUp, setStopLookUp] = useState('');

    let { BASE_URL, GET_NEXT_THREE_TRIPS_FOR_ALL_ROUTES_CURRENT_STOP, ...other } = useKeyTokenData()

    function reduceFetchDataAndUpdateState(routes) {
        let sectionListArray = []
        sectionListArray = routes.reduce(
            (initial, updated) => {
                if (updated.Trips.length == undefined) {
                    initial.push({ header: updated.RouteNo + "," + updated.RouteHeading, data: Array(updated.Trips) })
                    return initial
                } else {
                    initial.push({ header: updated.RouteNo + "," + updated.RouteHeading, data: updated.Trips })
                    return initial
                }
            }, [])
        setRoutesData(sectionListArray)
    }

    async function getStopRoutesDetail() {
        let url = BASE_URL + GET_NEXT_THREE_TRIPS_FOR_ALL_ROUTES_CURRENT_STOP + "&stopNo=" + stopLookUp
        await axios.get(url)
            .then(function (response) {
                let routes = response.data.GetRouteSummaryForStopResult.Routes.Route
                reduceFetchDataAndUpdateState(routes)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Enter StopNumber for all route details</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="e.g. 3034"
                onChangeText={newText => setStopLookUp(newText)}
            />
            <Pressable style={styles.lookUpBtn} onPress={getStopRoutesDetail}>
                <Text>Lookup</Text>
            </Pressable>
            <ListUpComingRoutesForStop routesInfo={routesData} />
        </View>

    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#fff',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 100,
        width: "50%",
        padding: 10,
        marginVertical: 15
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    headerText: {
        fontSize: 24,
        fontWeight: 200,
        marginVertical: 5
    },
    lookUpBtn: {
        borderWidth: 1,
        borderColor: '#20232a',
        borderRadius: 2,
        backgroundColor: '#fff',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 5
    }
})
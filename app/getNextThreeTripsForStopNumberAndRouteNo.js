import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { useKeyTokenData } from "./context/appKeyTokenData"
import NextTripsDetailsForStopNumberUsingRouteNo from "./components/nextTripsDetailsForStopNumberUsingRouteNo"
import { useState, useEffect } from "react";
import axios from 'axios';


export default function GetNextThreeTripsForStopNoAndRouteNo() {

    const params = useLocalSearchParams()
    const { routeHeaded, routeNumber, stopNumber } = params;
    const [tripDetail, setTripDetails] = useState(null)

    let { BASE_URL, GET_NEXT_TRIPS_FOR_STOP, ...other } = useKeyTokenData()

    useEffect(() => {
        async function fetchTripDetail() {
            const URL = BASE_URL + GET_NEXT_TRIPS_FOR_STOP + `stopNo=${stopNumber}&routeNo=${routeNumber}&format=json`

            await axios.get(URL)
                .then(function (response) {
                    // handle success
                    console.log("response ->", response.data);
                    setTripDetails(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
        fetchTripDetail()
    }, [])

    return (
        <View>
            {
                tripDetail !== null ? (
                    <NextTripsDetailsForStopNumberUsingRouteNo tripDetails={tripDetail} />
                ) : (
                    <ActivityIndicator />
                )
            }
        </View>
    )
}
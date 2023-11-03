import { View, Text } from "react-native"
import { useKeyTokenData } from "./context/appKeyTokenData"
import axios from 'axios';
import { useState } from "react";


export default function GetAllRoutes() {
  let { BASE_URL, ROUTE_SUMMARY_FOR_STOP, ...other } = useKeyTokenData()

  const URL = BASE_URL + ROUTE_SUMMARY_FOR_STOP + "stopNo=3050&format=json"

  axios.get(URL)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  return (
    <View>
      <Text>Register</Text>
    </View>
  )
} 
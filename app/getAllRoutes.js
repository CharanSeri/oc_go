import { View, TextInput, StyleSheet, Pressable, Text } from "react-native"
import { useKeyTokenData } from "./context/appKeyTokenData"
import axios from 'axios';
import { useState } from "react";
import StopNumberRoutesDetails from "./components/stopNumberRoutesDetails"

export default function GetAllRoutes() {

  let { BASE_URL, ROUTE_SUMMARY_FOR_STOP, ...other } = useKeyTokenData()

  const [stopNumberSearchResult, setStopNumberSearchResult] = useState(null);

  const [text, setText] = useState('');

  const busStopNumberInputUpdate = async () => {

    const URL = BASE_URL + ROUTE_SUMMARY_FOR_STOP + `stopNo=${text}&format=json`

    await axios.get(URL)
      .then(function (response) {
        setStopNumberSearchResult(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter StopNumber</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={(val) => setText(val)}
        inputMode="numeric"
        placeholder="e.g. 3050"
        keyboardType="numeric"
      />
      <Pressable onPress={busStopNumberInputUpdate} style={styles.lookUpBtn}>
        <Text style={styles.lookUpBtnText}>search</Text>
      </Pressable>
      <StopNumberRoutesDetails stopNumberDetails={stopNumberSearchResult} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "light",
    marginVertical: 5
  },
  lookUpBtn: {
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 2,
    backgroundColor: '#fff',
    color: '#20232a',
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  lookUpBtnText: {
    fontSize: 12,
    fontWeight: "light",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#fff',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 12,
    width: "25%",
    padding: 8,
    marginVertical: 15
  },
});
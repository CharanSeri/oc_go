import { View, TextInput, StyleSheet, Pressable, Text } from "react-native"
import { useKeyTokenData } from "./context/appKeyTokenData"
import axios from 'axios';
import { useRef, useState } from "react";
import StopNumberRoutesDetails from "./components/stopNumberRoutesDetails"

export default function GetAllRoutes() {

  const [stopNumberSearchResult, setStopNumberSearchResult] = useState(null);
  
  const [text, setText] = useState('');

  let busStopNumberSearch = useRef(null)

  let { BASE_URL, ROUTE_SUMMARY_FOR_STOP, ...other } = useKeyTokenData()

  const busStopNumberInputUpdate = async () => {

    const URL = BASE_URL + ROUTE_SUMMARY_FOR_STOP + `stopNo=${text}&format=json`

    await axios.get(URL)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setStopNumberSearchResult(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <View style={styles.lookUpLayout}>
      <TextInput
        ref={busStopNumberSearch}
        style={styles.input}
        onChangeText={(val) => setText(val)}
        value={text}
        inputMode="numeric"
        placeholder="e.g. 3050"
        keyboardType="numeric"
      />
      <Pressable onPress={busStopNumberInputUpdate} style={styles.lookUpBtn}>
        <Text>Lookup</Text>
      </Pressable>
      <StopNumberRoutesDetails stopNumberDetails={stopNumberSearchResult} />
    </View>
  )
}

const styles = StyleSheet.create({
  lookUpLayout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  lookUpBtn: {
    padding: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "30%"
  },
});
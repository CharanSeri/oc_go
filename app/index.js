import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, Pressable, Button } from "react-native"

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select from below options</Text>
      <Link href="/getAllRoutes" style={{ marginVertical: 10 }} asChild>
        <Pressable style={styles.linkStyle}>
          <Text style={styles.linkText}>Find Routes</Text>
        </Pressable>
      </Link>
      <Link href="/getNextThreeRoutesSummary" style={styles.linkStyle} asChild>
        <Pressable>
          <Text style={styles.linkText}> Route details</Text>
        </Pressable>
      </Link>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-between",
    padding: 24,
    backgroundColor: '#eaeaea',
  },

  title: {
    marginVertical: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkStyle: {
    marginVertical: 10,
    width: "100%",
    padding: 15,
    borderCurve: 20,
    backgroundColor: "#20232a",
    borderRadius: ".5rem"
  },
  linkText: {
    color: "#fff",
    textAlign: 'center',
  }
});


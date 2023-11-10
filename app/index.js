import { Link } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, Pressable, Button } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>select</Text>
      <Link href="/getAllRoutes" asChild>
        <Pressable style={styles.linkStyle}>
          <Text style={styles.linkText}>routes summary for bus stop</Text>
          <MaterialIcons name="chevron-right" style={styles.linkText} />
        </Pressable>
      </Link>
      <Link href="/getNextThreeRoutesSummary" asChild>
        <Pressable style={styles.linkStyle}>
          <Text style={styles.linkText}>upcoming routes for bus stop</Text>
          <MaterialIcons style={styles.linkText} name="chevron-right" />
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
  },

  title: {
    marginVertical: 16,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 4,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "light",
  },
  linkStyle: {
    borderWidth: 1,
    borderColor: '#20232a',
    marginVertical: 10,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    minWidth: "75%",
    justifyContent: "space-evenly"
  },
  linkText: {
    color: "#20232a",
    fontSize: 16,
    fontWeight: "light",
    paddingVertical: 4
  }
});


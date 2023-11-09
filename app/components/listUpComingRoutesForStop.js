import { Text, View, SectionList } from "react-native"

export default function ListUpComingRoutesForStop({ routesInfo }) {
    return (
        <View>
            {
                routesInfo.length > 0 &&
                <SectionList
                    sections={routesInfo}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View >
                            <Text>{item.TripDestination + " " + item.TripStartTime}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { header } }) => (
                        <Text>{header}</Text>
                    )}
                />
            }
        </View>
    )
}
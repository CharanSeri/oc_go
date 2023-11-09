import { Stack } from "expo-router";
import { KeyTokenDataContextProvider } from "./context/appKeyTokenData"

export default function _layout() {
    return (
        <KeyTokenDataContextProvider>
            <Stack
            // screenOptions={
            //     {
            //         headerStyle: {
            //             backgroundColor: 'black'

            //         },
            //         headerTintColor: "white"
            //     }
            // }
            >
                <Stack.Screen name="index" options={{
                    title: "Home"
                }} />
                <Stack.Screen name="getAllRoutes" options={{
                    title: "Routes"
                }} />
                <Stack.Screen name="getNextThreeRoutesSummary" options={{
                    title: "Routes Summary"
                }} />
                <Stack.Screen name="getNextThreeTripsForStopNumberAndRouteNo" options={{
                    title: "Next Trips",
                    presentation: 'modal'
                }} />
                <Stack.Screen name="[missing]" options={{
                    title: "Error : 404!"
                }}
                />
            </Stack>
        </KeyTokenDataContextProvider>
    )
}
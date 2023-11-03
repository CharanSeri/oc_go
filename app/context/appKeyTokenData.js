import { useContext, createContext } from 'react';

const KeyTokenDataContext = createContext()

export function useKeyTokenData() {
    return useContext(KeyTokenDataContext)
}

export function KeyTokenDataContextProvider({ children }) {

    const BASE_URL = "https://api.octranspo1.com/v2.0"
    const APPID = "da87a9f4"
    const TOKEN = "911724ea50ff3636db0c3e713a583eed"
    const ROUTE_SUMMARY_FOR_STOP = `/GetRouteSummaryForStop?appID=${APPID}&apiKey=${TOKEN}&`
    const GET_NEXT_TRIPS_FOR_STOP = `/GetNextTripsForStop?appID=${APPID}&apiKey=${TOKEN}&`
    const GET_NEXT_THREE_TRIPS_FOR_ALL_ROUTES_CURRENT_STOP = `/GetNextTripsForStopAllRoutes?appID=${APPID}&apiKey=${TOKEN}&`
    const GET_GTFS_DATA_FROM_TABLE = `/Gtfs?appID=${APPID}&apiKey=${TOKEN}&`



    return <KeyTokenDataContext.Provider value={{ BASE_URL, ROUTE_SUMMARY_FOR_STOP, GET_NEXT_TRIPS_FOR_STOP, GET_NEXT_THREE_TRIPS_FOR_ALL_ROUTES_CURRENT_STOP, GET_GTFS_DATA_FROM_TABLE }}>
        {children}
    </KeyTokenDataContext.Provider>
}
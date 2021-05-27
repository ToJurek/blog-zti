import {TypedUseSelectorHook, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import persistedReducer, {RootState} from "./rootReducer";
import {persistStore} from "redux-persist";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector


const makeStore = () => configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})

export default () => {
    let store = makeStore()
    let persistor = persistStore(store)
    return {
        store, persistor
    }
}
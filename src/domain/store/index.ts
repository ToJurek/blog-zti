import {useSelector, TypedUseSelectorHook} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer, {RootState} from "./rootReducer";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector


const store = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false})
})

export default store
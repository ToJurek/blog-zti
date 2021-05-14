import {useSelector, TypedUseSelectorHook} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer, {RootState} from "./rootReducer";
import {MakeStore, createWrapper} from "next-redux-wrapper"
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector


const store: MakeStore<RootState> = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck:false})
})

export const wrapper = createWrapper<RootState>(store, {
    debug: false
})

export default store
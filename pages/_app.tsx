import { AppProps } from "next/app";
import store, { wrapper } from "../src/domain/store";
import Navbar from "../src/components/Navabar";
import {Provider} from "react-redux";
import {persistStore, autoRehydrate} from 'redux-persist'

interface IProps {
    userAgent: string;
}

const CartApp = ({
                     Component,
                     pageProps,
                 }: IProps & AppProps<IProps>) => (
    <span className="p-float-label">
        {persistStore(store, {}, () => (
            <Provider store={store}>
                <Navbar/>
                <Component {...pageProps} />
            </Provider>
        ))

    }


    </span>

);

export default wrapper.withRedux(CartApp);

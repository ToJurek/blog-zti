import Login from "../../src/components/Login";
import {wrapper} from "../../src/domain/store";

 const Example = () => {
    return (
        <Login />
    )
}

export const getStaticProps = wrapper.getStaticProps(async  ({store}) => {
    const thunkDispatch = store.dispatch
    return {
        revalidate: 60
    }
})

export default Example
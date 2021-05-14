import Articles from "../../src/components/Articles";
import {wrapper} from "../../src/domain/store";

const Page = () => {
    return (
        <Articles />
    )
}

export const getStaticProps = wrapper.getStaticProps(async  ({store}) => {
    const thunkDispatch = store.dispatch
    return {
        store
    }
})

export default Page
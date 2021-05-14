import Users from "../../src/components/Users";
import {wrapper} from "../../src/domain/store";

// @ts-ignore
const Page = () => <Users />

export const getStaticProps = wrapper.getStaticProps(async  ({store}) => {
    const thunkDispatch = store.dispatch
    return {
        revalidate: 60
    }
})

export default Page
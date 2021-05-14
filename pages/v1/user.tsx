import Profile from "../../src/components/Profile";
import {wrapper} from "../../src/domain/store";

const Page = () => <Profile />

export const getStaticProps = wrapper.getStaticProps(async  ({store}) => {
    const thunkDispatch = store.dispatch
    return {
        revalidate: 60
    }
})

export default Page
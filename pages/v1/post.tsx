import Post from "../../src/components/Post";
import {wrapper} from "../../src/domain/store";

const Page = () => <Post />

export const getStaticProps = wrapper.getStaticProps(async  ({store}) => {
    const thunkDispatch = store.dispatch
    return {
        revalidate: 60
    }
})

export default Page
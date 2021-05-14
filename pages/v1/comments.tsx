import CommentSection from "../../src/components/CommentsSection";
import {wrapper} from "../../src/domain/store";

// @ts-ignore
const Page = () => <CommentSection />

export const getStaticProps = wrapper.getStaticProps(async  ({store}) => {
    const thunkDispatch = store.dispatch
    return {
        revalidate: 60
    }
})

export default Page
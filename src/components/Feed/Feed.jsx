import Post from "../Post/Post"
import Share from "../Shared/Share"
import "./Feed.css"
import { Posts } from "../../dummyData.js"

export default function Feed() {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share />
                {
                    Posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

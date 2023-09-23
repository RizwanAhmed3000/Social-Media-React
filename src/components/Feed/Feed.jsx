import Post from "../Post/Post"
import Share from "../Shared/Share"
import "./Feed.css"

export default function Feed() {
    return (
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share />
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

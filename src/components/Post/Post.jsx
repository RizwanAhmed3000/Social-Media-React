import "./Post.css"
import { ThumbUp, Favorite } from "@mui/icons-material"
import { useState } from "react"
import { Users } from "../../dummyData.js"

export default function Post({ post }) {
    const [likeCount, setLikeCount] = useState(post.like)
    const [isLikeTrue, setIsLikeTrue] = useState(false)

    function likeHandler() {
        if (!isLikeTrue) {
            setLikeCount((c) => c + 1)
            setIsLikeTrue(true)
        } else if (isLikeTrue) {
            setLikeCount((c) => c - 1)
            setIsLikeTrue(false)
        }
    }

    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="authDeatil">
                        <img src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="" className="profileImage" />
                        <span className="userName">{
                            Users.filter((user) => user.id === post.userId)[0].username
                        }</span>
                        <span className="timeAgo">{post?.date}</span>
                    </div>
                </div>
                <div className="postMid">
                    <div >
                        <p className="postText">{post?.desc}</p>
                        <div className="postImgContainer">
                            <img src={post?.photo} alt="" className="postImg" />
                        </div>
                    </div>
                </div>
                <div className="postBottom">
                    <div className="likeBtn">
                        <span className="thumbsUp" onClick={() => {
                            likeHandler()
                        }}><ThumbUp style={isLikeTrue ? { color: "#4e79d9" } : { color: "white" }} /></span>
                        {likeCount} people like it
                        <span></span>
                    </div>
                    <div className="commentIndicator">
                        <span>{post.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

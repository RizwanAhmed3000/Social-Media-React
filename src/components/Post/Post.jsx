import "./Post.css"
import { ThumbUp, Favorite } from "@mui/icons-material"

export default function Post() {
    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="authDeatil">
                        <img src="/assets/FB_IMG_1634883944960.jpg" alt="" className="profileImage"/>
                        <span className="userName">Username</span>
                        <span className="timeAgo">10h ago</span>
                    </div>
                </div>
                <div className="postMid">
                    <div >
                        <p className="postText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa numquam explicabo</p>
                        <div className="postImgContainer">
                            <img src="https://images.unsplash.com/photo-1695007439803-043bf646f197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="postImg"/>
                        </div>
                    </div>
                </div>
                <div className="postBottom">
                    <div className="likeBtn">
                        <span className="thumbsUp"><ThumbUp/></span>
                        <span className="fav"><Favorite/></span>2 people like it
                        <span></span>
                    </div>
                    <div className="commentIndicator">
                        <span>1 comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import "./Rightbar.css"
import { Users } from "../../dummyData.js"
import OnlineFriendList from "../Online/OnlineFriendList"

export default function Rightbar() {

    return (
        <div className="rightbarContainer">
            <div className="rightbarWrapper">
                <div className="eventConatiner">
                    <img src="/assets/gift (1).png" alt="" className="giftImage" />
                    <span><b>Rizwan</b> and <b>2 other</b> have birthday today</span>
                </div>
                <div className="eventPost">
                    <img src="https://img.freepik.com/premium-psd/neon-instagram-post-template-elegant-trendy-dynamic_125755-81.jpg" alt="" className="eventPostImg" />
                </div>
                <div className="onlineFriends">
                    <OnlineFriendList key={Users.id} onlineFriendsArray={Users} />
                </div>
            </div>
        </div>
    )
}


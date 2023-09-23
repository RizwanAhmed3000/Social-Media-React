import "./Rightbar.css"
import { Redeem } from "@mui/icons-material"

export default function Rightbar() {

    const onlineFriendsArray = [
        {
            profileImage: "/assets/FB_IMG_1634883944960.jpg",
            name: "Rizwan"
        },
        {
            profileImage: "/assets/FB_IMG_1634883944960.jpg",
            name: "ali"
        },
        {
            profileImage: "/assets/FB_IMG_1634883944960.jpg",
            name: "bilal"
        },
        {
            profileImage: "/assets/FB_IMG_1634883944960.jpg",
            name: "hasan"
        },
    ]

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
                    <OnlineFriendList onlineFriendsArray={onlineFriendsArray} />
                </div>
            </div>
        </div>
    )
}

function OnlineFriendList({ onlineFriendsArray }) {
    return (
        <>
            <h3>Online Friends</h3>
            <ul className="sidebarItmesList">
                {
                    Array.from([...onlineFriendsArray], (item) => (
                        <li className="sidebarItems">
                            <div className="profileImgContainer">
                                <img src={item.profileImage} alt="" className="profileImage" />
                                <span className="online"></span>
                            </div>
                            <span className="itemText">{item.name}</span>
                        </li>
                    ))
                }
                <button className="seeMoreBtn">See more</button>
            </ul>
        </>

    )
}

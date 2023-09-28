

export default function OnlineFriendList({ onlineFriendsArray }) {
    return (
        <>
            <h3>Online Friends</h3>
            <ul className="sidebarItmesList">
                {
                    Array.from([...onlineFriendsArray], (user) => (
                        <li className="sidebarItems">
                            <div className="profileImgContainer">
                                <img src={user.profilePicture} alt="" className="profileImage" />
                                <span className="online"></span>
                            </div>
                            <span className="itemText">{user.username}</span>
                        </li>
                    ))
                }
                <button className="seeMoreBtn">See more</button>
            </ul>
        </>

    )
}


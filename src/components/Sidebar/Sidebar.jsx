import "./Sidebar.css"
import {
    RssFeed, Chat, PlayCircle, Groups, Bookmark, Work, Event
} from '@mui/icons-material';
import { Users } from "../../dummyData.js";

export default function Sidebar() {

    const sidebarItmesArray = [
        {
            icon: <RssFeed className="itemIcon" />,
            text: "Feed"
        },
        {
            icon: <Chat className="itemIcon" />,
            text: "Chat"
        },
        {
            icon: <PlayCircle className="itemIcon" />,
            text: "Video"
        },
        {
            icon: <Groups className="itemIcon" />,
            text: "Gropus"
        },
        {
            icon: <Bookmark className="itemIcon" />,
            text: "Bookmarks"
        },
        {
            icon: <Work className="itemIcon" />,
            text: "Jobs"
        },
        {
            icon: <Event className="itemIcon" />,
            text: "Events"
        },
    ]

    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <SidebarItemList sidebarItmesArray={sidebarItmesArray} />
                <SidebarFriendsList key={Users.id} friendsArray={Users} />
            </div>
        </div>
    )
}


//------------------------Item list-------------------------------//

function SidebarItemList({ sidebarItmesArray }) {
    return (
        <ul className="sidebarItmesList">
            {
                Array.from([...sidebarItmesArray], (item) => (
                    <li className="sidebarItems">
                        {item.icon}
                        <span className="itemText">{item.text}</span>
                    </li>
                ))
            }
            <button className="seeMoreBtn">See more</button>
        </ul>
    )
}

//------------------------Firends list-------------------------------//

export function SidebarFriendsList({ friendsArray }) {
    return (
        <ul className="sidebarItmesList">
            {
                Array.from([...friendsArray], (user) => (
                    <li className="sidebarItems">
                        <img src={user.profilePicture} alt="" className="profileImage" />
                        <span className="itemText">{user.username}</span>
                    </li>
                ))
            }
            <button className="seeMoreBtn">See more</button>
        </ul>
    )
}
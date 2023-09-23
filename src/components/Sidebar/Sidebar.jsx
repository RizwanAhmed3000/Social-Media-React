import "./Sidebar.css"
import {
    RssFeed, Chat, PlayCircle, Groups, Bookmark, Work, Event
} from '@mui/icons-material';


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

    const friendsArray = [
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
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <SidebarItemList sidebarItmesArray={sidebarItmesArray} />
                <SidebarFriendsList friendsArray={friendsArray} />
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

function SidebarFriendsList({ friendsArray }) {
    return (
        <ul className="sidebarItmesList">
            {
                Array.from([...friendsArray], (item) => (
                    <li className="sidebarItems">
                        <img src={item.profileImage} alt="" className="profileImage"/>
                        <span className="itemText">{item.name}</span>
                    </li>
                ))
            }
            <button className="seeMoreBtn">See more</button>
        </ul>
    )
}
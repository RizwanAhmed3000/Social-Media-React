import "./Sidebar.css"
import {
    RssFeed, Chat, PlayCircle, Groups, Bookmark, Work, Event } from '@mui/icons-material';


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
                <ul className="sidebarItmesList">
                    {
                        Array.from([...sidebarItmesArray], (item) => (
                            <li className="sidebarItems">
                                {item.icon}
                                <span className="itemText">{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
import React from 'react';
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {Avatar, IconButton} from '@material-ui/core'
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat'
import './Searchbar.css'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebar__header"></div>
                <Avatar src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90b"/>
                <div className="sidebar__headerRight" >
                    <IconButton>
                     
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat"
                    type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>   
        </div>
    )
}
export default Sidebar
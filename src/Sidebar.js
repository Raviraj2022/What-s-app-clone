import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Chat,
  DonutLargeOutlined,
  MoreVertOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import SidebarChats from "./SidebarChats";
import db from "./firebase";
import { collection, onSnapshot, onSnapshotsInSync } from "firebase/firestore";
const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unSubscribe = onSnapshot(collection(db, "rooms"), (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unSubscribe();
    };
    //     // console.log(rooms);
  }, []);
  // console.log(rooms);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="search or chat with your friend" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChats addNewChat />
        {rooms.map((room) => (
          <SidebarChats key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

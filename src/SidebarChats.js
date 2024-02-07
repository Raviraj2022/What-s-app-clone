import React, { useEffect, useState } from "react";
import "./SidebarChats.css";
import { Avatar } from "@mui/material";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";
const SidebarChats = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = async () => {
    const roomName = prompt("Please enter a name for the chat");
    if (roomName) {
      const roomsCollection = collection(db, "rooms");

      try {
        const newDocRef = await addDoc(roomsCollection, {
          name: roomName,
        });

        // console.log("Document added with ID:", newDocRef.id);
      } catch (error) {
        console.error("Error adding document:", error);
      }
    }
  };
  return !addNewChat ? (
    <div className="SidebarChat">
      <Avatar src={`https://api.dicebear.com/7.x/${seed}/svg`} />
      <div className="SidebarChat__info">
        <h2> {name}</h2>
        <p>Last Message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="SidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChats;

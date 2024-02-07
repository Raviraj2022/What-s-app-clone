import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticonOutlined,
  MicOutlined,
  MoreVertOutlined,
  SearchOutlined,
} from "@mui/icons-material";
const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(`sending ${input}`);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://api.dicebear.com/7.x/${seed}/svg`} />
        <div className="chat_headerInfo">
          <h2>My name</h2>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Ravi</span>
          Hey Baby
          <span className="chat_time">2:40</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonOutlined />
        <form>
          <input
            placeholder="Type a messages"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            send a Message
          </button>
        </form>
        <MicOutlined />
      </div>
    </div>
  );
};

export default Chat;

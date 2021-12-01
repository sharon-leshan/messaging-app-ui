import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import "./Chat.css";

const Chat = ({messages}) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Maleo</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
      {messages.map(message => (
            <p className={`chat__message ${message.received && 'chat__receiver'}`}>
              <span className="chat__name">{message.name} </span>
              {message.message}
              <span className="chat__timestamp">
                {message.timestamp}
              </span>
            </p>
          ))}
        {/* <p className="chat__message">
          <span className="chat__name">Maleo</span>
          Hello Sharon!
          <span className="chat__timestamp">
            {new Date("2021-12-01T11:43:20.584Z").toUTCString()}
          </span>
        </p>
        <p className="chat__message chat__receiver">
           */}
          {/* <span className="chat__name"> Sharon</span>
          Hey Maleo! What's poppin
          <span className="chat__timestamp">
            {new Date("2021-12-01T11:45:10.584Z").toUTCString()}
          </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Maleo</span>
          Nothing much, How are you doing.
          <span className="chat__timestamp">
            {new Date("2021-12-01T11:50:55.584Z").toUTCString()}
          </span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name"> Sharon</span>
          <span className="chat__timestamp">
            {new Date("2021-12-01T11:55:30.584Z").toUTCString()}
          </span>
        </p>
      // </div> */}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;

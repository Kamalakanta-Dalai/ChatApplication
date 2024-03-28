import React, { useContext, useEffect, useState } from "react";
import Message from "./message.jsx";
import { ChatContext } from "../context/ChatContext.jsx";
import { onSnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase.jsx";

const messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default messages;

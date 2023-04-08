import { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import "../styles/ChatPage.css";
import "../styles/Button.css";

export function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState(null);
  const [chatRoom, setChatRoom] = useState(null);
  const [ready, setReady] = useState(false);
  const context = useContext(AppContext);
  const messageListRef = useRef(null);

  function handleSubmit(message) {
    const timestamp = Date.now();
    client.publish({
      room: "algebra",
      message: { ...message, timestamp },
    });
  }

  function handleSignOut() {
    context.setUsername("");
  }

  const messageComponents = messages.map((message) => {
    const time = new Date(message.timestamp).toLocaleTimeString().slice(0, -3);
    const isCurrentUser = context.username === message.author.username;
    const messageClassNames = isCurrentUser ? "message-right" : "message-left";
    return (
      <div className={`message ${messageClassNames}`} key={message.id}>
    
      <Message
        key={message.id}
        avatarIndex={message.author.avatarIndex}
        author={message.author.username}
        text={message.text}
        time={time}
      />
      </div>
    );
  });

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const drone = new window.Scaledrone("nbuHcqqhgdYvrUEU");

    drone.on("open", (error) => {
      if (error) {
        console.log(error);
      } else {
        const room = drone.subscribe("algebra");

        setClient(drone);
        setChatRoom(room);
      }
    });
  }, []);

  useEffect(() => {
    if (chatRoom !== null && !ready) {
      chatRoom.on("data", (data) => {
        setMessages((messages) => {
          return [...messages, data];
        });
      });
      setReady(true);
    }
  }, [chatRoom, ready]);

  if (!context.isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="chat-container chat-background">
      <div>
        <h1 className="title">Welcome {context.username} to the Chat Room</h1>
      </div>
      <div className="button-position">
        <button
          className="button-signout"
          type="button"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>

      <div className="message-list" ref={messageListRef}>
        {messageComponents}
      </div>
      <MessageForm
        onSubmit={handleSubmit}
        username={context.username}
        avatarIndex={context.avatarIndex}
      />
    </div>
  );
}

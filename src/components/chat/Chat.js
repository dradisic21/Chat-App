import React from "react";
import { useState } from "react";
import "./Chat.css";

function Chat() {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    console.log('usao u sendMessage')
    e.preventDefault();
    if (message && message.replace(/\s/g, "").length > 0) {
      setMessage("");
      console.log('poslana poruka');
    }
  }
  return (
    <div className="chat-container">
      <div className="chat-message__container">
        <div className="title">
          <p>Chat room</p>
        </div>
        <div className="message-content"></div>
        <form className="message-form__item" onSubmit={sendMessage}>
          <input
            className="message-form__input"
            type="text"
            placeholder="Enter your Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <div className="message-form__button">
            <button className="button">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;

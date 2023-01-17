import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat-container">
      <div className="chat-message__container">
        <div className="title">
          <p>Chat room</p>
        </div>
        <div className="message-content"></div>
        <form className="message-form__item">
          <input
            className="message-form__input"
            type="text"
            placeholder="Enter your Message"
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

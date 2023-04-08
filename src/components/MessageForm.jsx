import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import "../styles/MessageForm.css";

export function MessageForm(props) {
  const [formState, setFormState] = useState("");

  function handleChange(message) {
    setFormState(message);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormState("");
    props.onSubmit({
      id: Date.now(),
      author: {
        username: props.username,
        avatarIndex: props.avatarIndex,
      },
      text: formState,
    });
  }

  return (
    <div className="message-form">
      <form onSubmit={handleSubmit}>
        <InputFormField type="text" value={formState} onChange={handleChange} placeholder="Type a message..."/>
        <SubmitFormField label="Send" />
      </form>
    </div>
  );
}

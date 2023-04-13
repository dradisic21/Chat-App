import "../styles/InputFormField.css";
import { FormField } from "./FormField";

export function InputFormField(props) {
  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <FormField>
      <label>{props.label}</label>
      <div>
        <input required className={props.className} type={props.type} onChange={handleChange} value={props.value} placeholder={props.placeholder}/>
      </div>
    </FormField>
  );
}

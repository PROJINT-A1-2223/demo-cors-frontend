import { useState } from "react";

function MessageSender() {
  const [message, setMessage] = useState('');

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    // prevent the default behavior of the form
    event.preventDefault();
    // send a json object with message as a property to the endpoint /logMyMessage
    fetch('http://localhost:8080/logMyMessage', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({message: message})
    });
  }

  return (
      <form onSubmit={handleSubmit}>
        <p>
          <label>Message</label>
          <input type="text" name="message" id="message" value={message} onChange={handleChange}/>
        </p>
        <p>
          <input type="submit" value="Envoyer"/>
        </p>
      </form>
  );
}

export default MessageSender;
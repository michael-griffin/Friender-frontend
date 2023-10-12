import {useState} from "react";
import {useParams} from "react-router-dom";
import FrienderAPI from "./api";


function MessageLog ({ user } ){

  const params = useParams();
  const {matchName } = params;

  const [messageText, setMessageText] = useState("");

  //message list

  //add new message form

  function handleChange(evt){
    const {name, value} = evt.target;
    setMessageText(value);
  }

  async function submitMessage(evt){
    evt.preventDefault();
    await FrienderAPI.addMessage(user.username, matchName, messageText);
    setMessageText("");
  }

  //FIXME: still need to have the log of messages already written.
  return (

    <form onSubmit={submitMessage}>
      <textarea
        name="message"
        value={messageText}
        placeholder="Type message"
        onChange={handleChange}
      />
      <button type="submit">Post</button>
    </form>
  )
}


export default MessageLog;
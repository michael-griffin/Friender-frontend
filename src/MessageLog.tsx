import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import FrienderAPI from "./api";
import IsLoading from "./IsLoading";


function MessageLog ({ user } ){

  const params = useParams();
  const {matchName } = params;

  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  const [messageCount, setMessageCount] = useState(messages.length);

  useEffect(function getMessages() {
    async function fetchMessages() {
      const messages = await FrienderAPI.getMessages(user.username, matchName);
      setMessages(messages);
      setIsLoaded(true);
    }
    fetchMessages()
  }, [messageCount])

  function handleChange(evt){
    const {name, value} = evt.target;
    setMessageText(value);
  }

  async function submitMessage(evt){
    evt.preventDefault();
    await FrienderAPI.addMessage(user.username, matchName, messageText);
    setMessageText("");
    setMessageCount(prevCount => prevCount + 1);
  }


  return (<>
    {isLoaded ? messages.map(msg => <p key={msg.id}>{msg.message}, from: {msg.sender}</p>)
              :
                <IsLoading />}
    <form onSubmit={submitMessage}>
      <textarea
        name="message"
        value={messageText}
        placeholder="Type message"
        onChange={handleChange}
      />
      <button type="submit">Post</button>
    </form>
    </>
  )
}


export default MessageLog;
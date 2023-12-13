import {useState, useEffect, useCallback} from "react";
import {useParams} from "react-router-dom";
import FrienderAPI from "./api";
import IsLoading from "./IsLoading";
import './MessageLog.css'


function MessageLog ({ user } ){

  const params = useParams();
  const {matchName } = params;

  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  //Necessary for linter (concerned about useEffect dependencies)
  const fetchMessages = useCallback(async function() {
    const messages = await FrienderAPI.getMessages(user.username, matchName);
    setMessages(messages);
    setIsLoaded(true);
  }, [user, matchName])

  useEffect(function getMessages() {
    fetchMessages()
  }, [fetchMessages])

  async function submitMessage(evt){
    evt.preventDefault();
    await FrienderAPI.addMessage(user.username, matchName, messageText);
    setMessageText("");
    fetchMessages();
  }

  function handleChange(evt){
    const {value} = evt.target; // const {name, value}
    setMessageText(value);
  }


  return (<div className='MessageLog'>
    {isLoaded ? <div className='MessageLog-field'>
                  {messages.map(msg =>
                  <p className='MessageLog-message' key={msg.id}><span className='MessageLog-from'> {msg.sender}: </span>{msg.message}</p>)}
                </div>
              :
                <IsLoading />}
    <form onSubmit={submitMessage} className='MessageLog-form'>
      <textarea
        name="message"
        value={messageText}
        placeholder="Type message"
        onChange={handleChange}
      />
      <button className='MatchCard-button' type="submit">Post</button>
    </form>
    </div>
  )
}


export default MessageLog;
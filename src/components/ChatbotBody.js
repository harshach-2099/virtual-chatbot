import React from 'react';
import { useState } from 'react';
import './ChatbotBody.css';
function ChatbotBody(){
    const currentDateTime=new Date().toLocaleString();
    const[username, setUsername]=useState('');
    const[messages, setMessages]=useState([]);
    const[message, setMessage]=useState('');
    const[date, setDate]= useState('');
    const[time, setTime]=useState('');
    function handleMessageChange(event){
        setMessage(event.target.value);
    }
    function handleSendMessage(){
        if(!message.trim()){
            alert("please enter a message")
            return;
        }
        const newChatMessage={
                    text: message,
                    user:username,
                    date:date,
                    time:time
                };
        console.log("New chat message:",newChatMessage);
        setMessages([...messages, newChatMessage]);
        setMessage('');
        setUsername('');
        setDate('');
        setTime(''); 
    }
    function handleDeleteMessage(indexToRemove){
        const confirmed = window.confirm("Are you sure you wnat to delete?");
        if(!confirmed) return;
        const updatedMessages = messages.filter((_, index)=> index !== indexToRemove);
        setMessages(updatedMessages);
    }
    return(
        <main>
            <h2>Chat with Your Virtual Assistance</h2>
            <p>Current system date/time:{currentDateTime}</p>
            <form>
                <p>This form helps for interacting and get response for questions after filling the form</p>
                <label>Name:
                    <input type="text" value={username} 
                    onChange={(e)=>setUsername(e.target.value)} 
                    placeholder="Enter your name" />
                </label>
                <br/><br/>
                <label>
                    Message:
                    <textarea 
                         value={message}
                         onChange={handleMessageChange}
                         placeholder="start chatting here..." >
                   </textarea>
                </label>
                <br/><br/>
                <label>Date
                <input 
                   type="date"
                   value={date}
                   onChange={(e)=>setDate(e.target.value)}/>
                </label>
                <input 
                   type="time"
                   value={time}
                   onChange={(e)=>setTime(e.target.value)}/>
                   
                <button type="button" onClick={handleSendMessage} disabled={!message.trim()}>Send</button>
               <div className="chat-display">
                {messages.map((msg, index)=>(
                    <div key={index}>
                        <p>{msg.user} said at {msg.time || currentDateTime} on {msg.date ||""}:</p>
                        <p>{msg.text}</p>
                        <button onClick={()=>{
                           // if(window.confirm("Are you sure?")){
                            handleDeleteMessage(index);}}>Delete</button>
                    </div>
                
                ))}
                </div>
            </form>
        </main>
    );
}
export default ChatbotBody;
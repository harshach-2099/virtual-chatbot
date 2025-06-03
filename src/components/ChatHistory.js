import React, {useEffect, useState} from "react";
function ChatHistory(){
    const[chatHistory, setChatHistory]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('http://localhost:3001/api/chat-history');
                const data= await response.json();
                setChatHistory(data.chat);
                console.log('chatHistory:',chatHistory);
            }catch(error){
                console.log('Error fetching data:',error);
            }
        }
        fetchData();
       
    },[]);
    return(
        <div>
            <h1>Chat History</h1>
            {chatHistory?(
                <div>
                    {chatHistory.map((chat, index)=>(
                        <div key={index}>
                            <p><strong>{chat.sender}:</strong>{chat.message}</p>
                        </div>
                    ))}
                </div>
            ):(<p>Loading....</p>)}
        </div>
    );
}
export default ChatHistory;
import React, {useEffect} from 'react';

function About(){

    useEffect(()=>{
        console.log('About page rendered')
        document.body.style.backgroundColor='lightblue'
    },[]);
    return(
        <div style={{padding: '1rem'}}>
            <h2>About this Virtual Chatbot</h2>
            <p>This application provides an interactive chatbot experience for users.</p>
            <p>Customise this section to introduce your chatbots feature or purpose.</p>
        </div>
    );
}
export default About;
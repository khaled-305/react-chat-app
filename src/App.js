import React from 'react';
import { Button } from 'react-bootstrap';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="4da42b1f-534b-4918-8288-57e0bdf45044"
            userName="khaled305"
            userSecret="swordfish305"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;
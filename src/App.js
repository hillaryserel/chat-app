import { ChatEngine } from "react-chat-engine";

import { ChatFeed } from './components/ChatFeed';
import './App.css';
const App= () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="853926aa-6703-4332-8e08-8d1558dc2e1c"
        userName="larrythecoder"
        userSecret="2020"
        renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}
        />
    );
}

export default App;
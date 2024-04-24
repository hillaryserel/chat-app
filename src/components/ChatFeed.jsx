import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
     const { chats, activeChat, userName, messages} = props;

     const chat = chats && chats[activeChat];
     const renderMessages = () =>{
        const keys = Object.keys(messages);
        return keys.map((key, index) =>{
            const message = messages[key];
            const LastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return(
                <div key={`msg_${index}`} style={{ width: '100%'}}>
                <div className="message-block">
                    {
                        isMyMessage ? 
                        <MyMessage message={message}/>
                        : <TheirMessage message={message} LastMessage={messages[LastMessageKey]} />
                    }
                </div>
                <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ? '0px' : '68px'}}>
                       read-receipts
                </div>
                </div>
            );
        })
     }
 
if(!chat) return 'Loading...';

return(
    <div className="chat-feed">
          <div className="chat-title-container">
               <div className="chat-title">{chat.title}</div>
               <div className="chat-subtitle"></div>
               {chat.people.map((person) => ` ${person.person.username}`)}
          </div>
       {renderMessages()}
       <div style={{height: '100px'}}>
       <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat}/>
       </div>

       </div>
    </div>
);
}
export {ChatFeed}
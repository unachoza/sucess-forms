// import "./MessageList.css"

interface Message{
    text: string,
    icon: any
}

const MessageList = (Messages:Message[]) =>{
return(
    <div className="message-container">
        {/* <ul>
            {Messages.map((message, i) => {
                return <TextBox key={i} text={message.text} icon={message.icon} />
            })}
        </ul> */}
        <div className="message">text</div>
        <div className="message">text</div>
        <div className="message">text</div>
    </div>
)
}
export default MessageList
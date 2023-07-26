import {PrettyChatWindow} from "react-chat-engine-pretty"


const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
           <PrettyChatWindow
           projectId="4e11b970-f4ac-43c7-a40b-3d8511047626"
           username={props.user.username}
           secret={props.user.username}
           style={{ height: '100%'}}
           />
        </div>
    )
}


export default ChatsPage
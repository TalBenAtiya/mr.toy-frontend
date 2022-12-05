import { useEffect, useState } from "react"
import { socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG, SOCKET_EMIT_SET_TOPIC } from '../services/socket.service'
import chat from '../assets/img/messages.png'
import { useFormRegister } from "../hooks/useFormRegister"
import { useDispatch, useSelector } from "react-redux"
import { addToyMsg, setToy, updateToy } from "../store/actions/toy.action"
import { useRef } from "react"
import { useForm } from "../hooks/useForm"

export const Chat = ({toy}) => {

    const user  = useSelector(state => state.userModule.user)
    const dispatch = useDispatch()
    const [isChatOpen, setChatStatus] = useState()
    const [msg, handleChange, setMsg ] = useForm({txt: ''})
    const [topic] = useState(toy._id)

    
    useEffect(() => {
        socketService.on(SOCKET_EVENT_ADD_MSG, addMsg);
        return () => {
            socketService.off(SOCKET_EVENT_ADD_MSG, addMsg)
        }
    }, [])

    useEffect(() => {
        socketService.emit(SOCKET_EMIT_SET_TOPIC, topic)
    }, [topic])

    const onToggleChat = () => {
        setChatStatus(!isChatOpen)
    }

    const addMsg = (newMsg) => {
        dispatch(addToyMsg(newMsg))
    }

    const onSendMsg = (ev, msg) => {
        ev.preventDefault()
        const from = user?.fullname || 'Me'
        socketService.emit(SOCKET_EMIT_SEND_MSG, { from, txt: msg.txt, toyId: topic})
        setMsg({ txt: '' })
    }



    return <section className="chat main-layout">
        <button onClick={onToggleChat} className="chat-btn"><img src={chat} /></button>
        {isChatOpen && <div className="chat-modal main-layout">
            <div className="chat-data">
                <button onClick={onToggleChat}>X</button>
                <ul>
                    {toy?.msgs?.map((msg, idx) => (<li key={idx}>{msg.from === user.fullname ? 'Me': msg.from }: {msg.txt}</li>))}
                </ul>
            </div>
            <form onSubmit={(ev) => onSendMsg(ev, msg)}>
                <input value={msg.txt} name='txt' type="text" onChange={handleChange} />
                <button className="send-chat-btn">Send</button>
            </form>
        </div>}
    </section>
}
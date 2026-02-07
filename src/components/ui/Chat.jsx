import { IoIosChatbubbles } from "react-icons/io";

const Chat = () => {
  return (
    <div className='fixed h-screen  bg-amber-200 right-4 z-99'>
      <div className='absolute bottom-5 right-1 flex justify-center items-center w-16 h-16 bg-white rounded-full shadow-md cursor-pointer'>
        <IoIosChatbubbles size={40} color="green" />
      </div>
    </div>
  )
}

export default Chat

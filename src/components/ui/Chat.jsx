import { IoIosChatbubbles } from "react-icons/io";

const Chat = () => {
  return (
    <div className='fixed h-screen  bg-amber-200 right-4 z-99 transition'>
      <div className='absolute bottom-5 right-1 flex justify-center items-center w-12 h-12 opacity-50 hover:opacity-100 hover:transform-[translateY(-10px)] bg-black rounded-full shadow-md cursor-pointer'>
        <IoIosChatbubbles size={30} color="white" />
      </div>
    </div>
  )
}

export default Chat

import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import image from "../assets/contact-pic.avif"
import Form from "@/components/ui/Form";

const Contact = () => {
  return (
    <div className='px-5   lg:px-10 py-20 grid lg:grid-cols-4 gap-20 '>

      {/* left content */}
      <div className='col-span-2 flex flex-col gap-5'>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-700 rounded-full animate-pulse">
              <div className="w-3 h-3 bg-green-700 rounded-full animate-ping"></div>
            </div>
            <h2 className="font-semibold text-xs"> CONTACT US</h2>
          </div>
          <h1 className="text-5xl font-semibold">Complete this form to contact our team</h1>
          <small className="font-semibold">FOLLOW US:</small>
          <div className="flex gap-3">
            <span className="bg-gray-200 p-2 rounded-md"><FaTiktok /></span>
            <span className="bg-gray-200 p-2 rounded-md"><FaFacebookF /></span>
            <span className="bg-gray-200 p-2 rounded-md"><FaInstagram /></span>
          </div>
        </div>
        <div className="w-full h-80 bg-gray-400 rounded-2xl overflow-hidden">
          <img src={image} width={"100%"} alt="" />
        </div>
      </div>

      {/* right content */}
      <div className='col-span-2'>
        <Form/>
      </div>
    </div>
  )
}

export default Contact

import Slider from "../components/ui/Slider"
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa'

const Client = () => {
  return (
    <div className='px-10 py-20 lg:px-10'>
      <h1 className='font-semibold text-4xl'>What Our Clients Say</h1>
      <div className='flex-col flex lg:flex-row items-start gap-5 mt-10'>
        <div className='flex justify-between w-4xl'>
          <div className='inline-flex'>
            <div className='w-12 h-12 flex justify-center items-center rounded-full bg-white shadow'><FaArrowRight /></div>
            <div className='w-12 h-12 flex justify-center items-center rounded-full bg-white shadow'><FaArrowRight /></div>
            <div className='w-12 h-12 flex justify-center items-center rounded-full bg-white shadow'><FaArrowRight /></div>
          </div>
          <div className='w-12 h-12 flex justify-center items-center rounded-full bg-black shadow'><FaQuoteLeft color='white' /></div>
        </div>
        <div className='w-full lg:w-180 flex justify-end relative'>
            <Slider/>
        </div>
      </div>
    </div>
  )
}

export default Client

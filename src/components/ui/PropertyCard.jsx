import { SlLocationPin } from "react-icons/sl";
import { MdOutlineArrowOutward } from "react-icons/md"
import { FaNairaSign } from "react-icons/fa6";
import property from "../../assets/property1.jpg"
import { Button } from "./button";
import { useState } from "react";

const PropertyCard = ({ bg = property, location = "Bluewaters Island", propertyNumber = "01", propertyType = "Modern studio in Bluewaters Bay" }) => {

  const [detail, setDetail] = useState(false)


  const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }


  return (
    <article className="rounded-2xl h-90 overflow-hidden border relative z-50" style={style} >
      <div className="group h-full  overflow-hidden">
        <div className="group-hover:transform-[translateY(-1%)] transform-[translateY(-100%)] p-5 transition h-50 w-full bg-white">
          <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-center gap-5 w-full z-10 pb-2 border-b-2 border-gray-200">
              <div className="flex  gap-2 items-center">
                <h3 className="font-semibold lg:text-sm">{propertyNumber}</h3>
                <p className="font-semibold lg:text-sm ">{`${propertyType.substring(0, 25)}...`}</p>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-0.5"><FaNairaSign size={14} />300,000,000.00</h3>
              </div>
            </div>
            <div className="flex items-start justify-between gap-5 w-full z-10">
              <div>
                <small><span className="text-gray-500">Developer: </span>Ned Builders</small>
                <h2 className="lg:text-2xl lg:w-60">4-Bedroom Waterfront</h2>
              </div>
              <div>
                <Button onClick={() => setDetail(true)} size="sm" variant="outline">View Details</Button>
              </div>
            </div>
          </div>
        </div>


        <div className="group-hover:h-30 group-hover:gap-10 group-hover:transform-[translateY(0%)] transform-[translateY(-55%)] transition p-5 flex flex-col justify-between h-full">
          <div className="flex justify-between items-center">
            <div className="py-1 px-3 flex justify-between items-center gap-2 bg-white/5 backdrop-blur-md border-2 border-white rounded-3xl">
              <SlLocationPin color="white" />
              <small className="text-white">{location}</small>
            </div>
            <div className="w-8 h-8  bg-white flex justify-center items-center rounded-full shadow cursor-pointer">
              <MdOutlineArrowOutward />
            </div>
          </div>
          <div className="group-hover:flex group-hover:justify-between group-hover:w-full w-40 z-10">
            <h3 className="font-semibold mb-3 text-white lg:text-lg">{propertyNumber}</h3>
            <p className="font-semibold lg:text-lg text-white ">{propertyType}</p>
          </div>
        </div>
        <div className="h-30 w-full -z-10 rounded-b-2xl  bg-linear-to-t from-black to-transparent absolute bottom-0">
        </div>

      </div>
    </article>
  )
}

export default PropertyCard

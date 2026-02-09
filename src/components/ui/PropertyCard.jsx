import { SlLocationPin } from "react-icons/sl";
import { MdOutlineArrowOutward } from "react-icons/md"
import property from "../../assets/property1.jpg"

const PropertyCard = ({ bg=property, location = "Bluewaters Island", propertyNumber = "01", propertyType ="Modern studio in Bluewaters Bay"}) => {


  const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }


  return (
    <article className="rounded-2xl h-90 bg-black/30 overflow-hidden" style={style} >
      <div className="p-5 flex flex-col justify-between bg-black/50 h-full">
        <div className="flex justify-between items-center">
          <div className="py-1 px-3 flex justify-between items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white rounded-3xl">
            <SlLocationPin color="white"/>
            <small className="text-white">{location}</small>
          </div>
          <div className="w-8 h-8  bg-white flex justify-center items-center rounded-full shadow cursor-pointer">
            <MdOutlineArrowOutward  />
          </div>
        </div>
        <div className="w-40">
          <h3 className="font-semibold mb-3 text-white lg:text-lg">{propertyNumber}</h3>
          <p className="font-semibold lg:text-lg text-white">{propertyType}</p>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard

import image from "../../assets/property3.jpg"

const PropertyDetailCard = ({bg=image}) => {

  const propertyBg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  return (
    <div className='flex gap-10 bg-white h-130 w-260 p-5 rounded-2xl shadow-2xl'>
      <div className=' h-full w-200 flex justify-center items-center rounded-2xl' style={propertyBg}></div>
      <div>
        <h2 className='lg:text-3xl font-bold mb-5'>8-Bedroom Flat Apartment</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam voluptas adipisci blanditiis qui molestias. Eos non facilis laboriosam quisquam nemo, cumque, similique fugiat rem enim aliquam quis. Est, eligendi.</p>
      </div>
    </div>
  )
}

export default PropertyDetailCard

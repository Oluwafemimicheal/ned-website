import { Button } from "@/components/ui/button"
import { LuSettings2 } from "react-icons/lu";
import { HiMiniArrowSmallDown } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import PropertyCard from "@/components/ui/PropertyCard";
import property1 from "../assets/property1.jpg"
import property2 from "../assets/property2.jpg"
import property3 from "../assets/property3.jpg"

const FeaturedProject = () => {
  return (
    <div className="px-5 py-10 lg:px-10 lg:py-20">
      {/* Heading */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-3xl lg:text-4xl font-semibold">Featured Project</h1>
          <div className="hidden lg:flex items-center">
            <h3 className="text-4xl">241</h3>
            <sup className="text-[15px] text-gray-500">offers</sup>
          </div>
        </div>

        {/* Mobile Screen */}
        <div className="lg:hidden flex justify-between items-center">
          <div className="flex items-center">
            <h3 className="text-4xl">241</h3>
            <sup className="text-[15px] text-gray-500">offers</sup>
          </div>
          <div className="block">
            <Button size="sm" variant="outline">Filter <LuSettings2 /></Button>
          </div>
        </div>

        {/* Option */}
        <div className="flex justify-between items-center pb-5 border-b-2 border-gray-200">
          <div className="hidden lg:block">
            <Button size="sm" variant="outline">Filter <LuSettings2 /></Button>
          </div>
          <div className="w-full flex justify-between lg:justify-center gap-2 overflow-hidden">
            <Button size="lg" variant="outline" className="hidden lg:inline-flex">Buy <HiMiniArrowSmallDown /></Button>
            <Button size="lg" variant="outline" className="hidden lg:inline-flex">Any Property<HiMiniArrowSmallDown /></Button>
            <Button size="lg" variant="outline" className="hidden lg:inline-flex">All areas <HiMiniArrowSmallDown /></Button>

            {/* Buttons on mobile screen */}
            <Button size="sm" variant="outline" className="lg:hidden">Buy <HiMiniArrowSmallDown /></Button>
            <Button size="sm" variant="outline" className="lg:hidden">Any Property<HiMiniArrowSmallDown /></Button>
            <Button size="sm" variant="outline" className="lg:hidden">All areas <HiMiniArrowSmallDown /></Button>
            <Button size="sm" className="lg:hidden rounded-full w-8 h-8 cursor-pointer"><IoIosArrowDown color="white" /></Button>
          </div>
          <div>
            <Button size="sm" className="hidden lg:block">View All</Button>
          </div>
        </div>
      </div>

      {/* Property Display */}
      <div className="grid lg:grid-cols-3 gap-5 mt-10">
        <PropertyCard bg={property2} />
        <PropertyCard bg={property1} />
        <PropertyCard bg={property3} />
      </div>
    </div>
  )
}

export default FeaturedProject

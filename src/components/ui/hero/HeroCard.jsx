import { motion } from "framer-motion";
const HeroCard = ({ heading = "Write your heading here", text = "paste your text here", bg }) => {

  const style = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
  return (
    <div className="flex h-full flex-col justify-start items-start gap-5 relative" style={style}>
      <div  className="bg-black/80 h-full w-full">
        <motion.div initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} className="absolute lg:flex flex-col justify-center px-10 lg:left-20 bottom-80 lg:bottom-20 lg:w-[50%] text-white z-10">
          <h2 className="font-bold text-2xl lg:text-3xl mb-3">{heading}</h2>
          <p className="font-normal">{text}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroCard

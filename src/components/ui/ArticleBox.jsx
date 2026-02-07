import image from "../../assets/contact-pic.avif"

const ArticleBox = ({ text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quidem veniam quaerat! Fuga sint culpa sed facere atque. Commodi nesciunt ratione in laboriosam a tempora beatae autem nihil magnam consequuntur?", clientPicture = image}) => {
  return (
    <div>
      <p className='lg:w-2xl'>{text}</p>
      <div className='w-full flex justify-between items-center absolute bottom-0'>
        <div>
          <div className='w-18 h-18 flex justify-center items-center rounded-full bg-white shadow overflow-hidden'>
            <img src={clientPicture} alt="loading" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleBox

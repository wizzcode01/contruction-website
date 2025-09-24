import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

const Clients = ({ clients }) => {
  const [currentImage, setCurrentImage] = useState(
    clients.map(() => 0)
  )

  const handlePrev = (clientIndex) => {
    setCurrentImage((prev) =>
      prev.map((imageIndex, i) =>
        i === clientIndex ? Math.max(imageIndex - 1, 0) : imageIndex
      )
    )
  }

  const handleNext = (clientIndex, totalImages) => {
    setCurrentImage((prev) =>
      prev.map((imageIndex, i) =>
        i === clientIndex ? Math.min(imageIndex + 1, totalImages - 1) : imageIndex
      )
    )
  }

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-bold text-4xl text-center text-yellow-500 mb-12">
          Our Clients
        </h1>
        
        <div className="space-y-12">
          {clients.map((client, clientIndex) => {
            const allImages = [client.cards.icon, ...client.cards.image]
            const currentImageIndex = currentImage[clientIndex]
            
            return (
              <div key={clientIndex} className="bg-gray-50 rounded-2xl p-2 shadow-lg ">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {client.title}
                </h2>
                
                {/* Image Carousel Container */}
                <div className="relative group ">
                  {/* Main Image Display */}
                  <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden ">
                    <img
                      src={allImages[currentImageIndex]}
                      alt={`${client.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                    />
                    
                    {/* Gradient Overlay for better button visibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePrev(clientIndex)}
                      disabled={currentImageIndex === 0}
                      className="pointer-events-auto w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:text-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
                      aria-label="Previous image"
                    >
                      <FaArrowLeft size={18} />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={() => handleNext(clientIndex, allImages.length)}
                      disabled={currentImageIndex === allImages.length - 1}
                      className="pointer-events-auto w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:text-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
                      aria-label="Next image"
                    >
                      <FaArrowRight size={18} />
                    </button>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {allImages.map((image, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={() => setCurrentImage(prev => 
                        prev.map((val, i) => i === clientIndex ? imageIndex : val)
                      )}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        currentImageIndex === imageIndex
                          ? 'border-yellow-500 ring-2 ring-yellow-200'
                          : 'border-gray-300 hover:border-yellow-400'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${imageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-600 mt-6 text-center leading-relaxed">
                  {client.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Clients





// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { useState } from 'react';
// const Clients = ({clients}) => {
  
//   const [currentImage, setCurrentImage] = useState(
//     clients.map(() => 0)
//   )
//  const handlePrev = (clientIndex) => {
//    setCurrentImage((prev) => 
//     prev.map((imageIndex, i) =>  
//       i === id ? Math.max(imageIndex - 1, 0) : imageIndex
//    )
//   )
//  }

// const handleNext = (clientIndex, totalImages) => {
//   setCurrentImage((prev) => 
//     prev.map((imageIndex, i) => 
//      i === clientIndex? Math.min(imageIndex + 1, totalImages - 1) : imageIndex
//     )
//   )
// }
//     return (
//        <div className="bg-white p-3"> 
//         <h1 className="font-semibold text-3xl text-center text-yellow-500">Our Clients</h1>
//         {clients.map((data, index) => (
//             <div key={index} className="mb-8 m-2 mt-10 text-gray-600">
//               <h2 className="mb-2 text-xl m-2 text-gray-700 font-bold">{data.title}</h2>
//               <div className="relative w-full overflow-x-auto h-full flex flex-nowrap"
//              >
//                 <div className="relative w-full h-full flex-shrink-0 "
//                   style={{width: '100vw', maxWidth: '100%', height: '100%' }}>
//                   <img 
//                   src={data.cards.icon} className="w-full h-56 object-cover rounded"/>
//                   <div className='flex justify-between gap-56 absolute top-1/2 -left-3 right-0 items-center px-4 -translate-y-1/2'>
//                       <button
//                       onClick={() => handlePrev(index)}
//                       disabled={currentImage[index] === 0}
//                       className="w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:text-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
//                       aria-label='Previous'
//                       ><FaArrowLeft className=''/></button>
//                       <button
//                       onClick={() => handleNext(index, data.cards.image.length)}
//                       disabled={currentImage[index] === data.cards.image.length - 1}
//                       className="w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:text-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
//                       aria-label='Next'
//                       ><FaArrowRight className=''/></button>
                 
//                   </div>
                
//                 </div> 
          
//                 {data.cards.image.map((img , id) => (
//                     <div
//                     key={id}
//                     className="w-full flex-shrink-0 h-full flex items-center justify-center"
//                     style={{width: '100vw', maxWidth: '100%', height: '100%' }}>
//                       <img src={img} className="object-cover w-full h-56 rounded"/>
//                     </div>
//                 ))}
//               </div>
//                <p>{data.desc}</p>
//            </div>
//         ))}
//        </div>
//     )
// }

// export default Clients
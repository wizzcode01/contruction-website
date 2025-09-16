const Clients = ({clients}) => {
    return (
       <div className="bg-white p-3"> 
        <h1 className="font-semibold text-3xl text-center text-yellow-500">Our Clients</h1>
        {clients.map((data, index) => (
            <div key={index} className="mb-8 m-2 mt-10 text-gray-600">
              <h2 className="mb-2 text-xl m-2 text-gray-700 font-bold">{data.title}</h2>
              <div className="relative w-full overflow-x-auto h-full flex flex-nowrap"
             >
                <div className="w-full h-full flex-shrink-0"
                  style={{width: '100vw', maxWidth: '100%', height: '100%' }}>
                  <img src={data.cards.icon} className="w-full h-56 object-cover rounded"/>
                </div> 
          
                {data.cards.image.map((img , id) => (
                    <div
                    key={id}
                    className="w-full flex-shrink-0 h-full flex items-center justify-center"
                    style={{width: '100vw', maxWidth: '100%', height: '100%' }}>
                      <img src={img} className="object-cover w-full h-56 rounded"/>
                    </div>
                ))}
              </div>
               <p>{data.desc}</p>
           </div>
        ))}
       </div>
    )
}

export default Clients
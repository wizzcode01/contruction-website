
const Project = ({ projects }) => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="w-[90%] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5">
          <div className="text-center md:text-left">
            <small className="text-gray-600">My Portfolio</small>
            <h3 className="text-3xl font-bold">
              My Latest{" "}
              <span className="text-yellow-400 italic">Projects</span>
            </h3>
          </div>
          <div className="flex gap-2 items-center">
            <button className="bg-green-900 text-white py-2 px-5 rounded-3xl hover:bg-yellow-500 hover:text-green-900 transition">
              View All Services
            </button>
            <FaArrowRight className="text-4xl bg-white p-2 rounded-full border-green-700 border-2 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Projects Section */}
        <div className="text-center my-10">
          <h1 className="text-2xl md:text-4xl text-gray-500">
            A Collection Of My Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          {projects.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-5 flex flex-col gap-4 hover:shadow-xl transition-all duration-300"
            >
              <figure className="w-full h-64 md:h-80 overflow-hidden rounded-lg">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </figure>
              <div className="text-center md:text-left">
                <h1 className="font-bold text-green-900 text-lg">{data.title}</h1>
                <p className="text-gray-600">{data.description}</p>
              </div>
              <button className="flex gap-2 items-center justify-center md:justify-start text-green-900 font-medium hover:underline">
                Visit Site <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

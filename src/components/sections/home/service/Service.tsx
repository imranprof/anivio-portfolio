

const Service = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="group w-64 h-80 [perspective:1000px] ">
        {/* Card Wrapper */}
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* Front */}
          <div className="absolute w-full h-full bg-blue-300 rounded-xl shadow-lg flex items-center justify-center backface-hidden">
            <h2 className="text-xl font-bold">Front Side</h2>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full bg-gray-800 text-white rounded-xl shadow-lg flex items-center justify-center [transform:rotateY(180deg)] backface-hidden">
            <p className="text-lg">Back Side</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
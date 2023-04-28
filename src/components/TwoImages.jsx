import { FaCheck } from 'react-icons/fa';

const ThreeImages = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-10 ">Find the right protection for your home</h2>
      <div className="flex items-center justify-center bg-white py-10 rounded-lg px-4 md:px-0">
        <div className="max-w-6xl mx-auto px-2 sm:px-2 lg:px-0 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3 flex flex-col items-center justify-center  rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-600 transition-all duration-300">
            <p className="text-xl font-bold text-gray-800 mb-4">Surveillance Cameras</p>
            <img className="h-auto w-full transform hover:scale-105" src="images/cctv.jpg" alt="Image 1" />
            <div className="mt-4 flex items-center justify-center">
              <FaCheck className="text-green-500 mr-2" />
              <p>Night vision</p>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <FaCheck className="text-green-500 mr-2" />
              <p>Remote viewing capabilities</p>
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col items-center justify-center  rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-600 transition-all duration-300 border-l-2 border-r-2">
            <p className="text-xl font-bold text-gray-800 mb-4">Electric fences</p>
            <img className="h-auto w-full transform hover:scale-105" src="images/fence.jpg" alt="Image 2" />
            <div className="mt-4 flex items-center justify-center">
              <FaCheck className="text-green-500 mr-2" />
              <p>Shock sensors</p>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <FaCheck className="text-green-500 mr-2" />
              <p>Alarm to alert security personnel</p>
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col items-center justify-center rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-600 transition-all duration-300">
            <p className="text-xl font-bold text-gray-800 mb-4">Video intercom</p>
            <img className="h-auto w-full transform hover:scale-105" src="images/intercom2.jpg" alt="Image 3" />
            <div className="mt-4 flex items-center justify-center">
              <FaCheck className="text-green-500 mr-2" />
              <p> Audio intercoms</p>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <FaCheck className="text-green-500 mr-2" />
              <p> Video door intercoms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeImages;

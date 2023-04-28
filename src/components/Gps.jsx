

const Gps = () => {
  return (
    <div className="flex items-center justify-center bg-white py-10 rounded-lg  px-4 md:px-0 ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
    <div className="lg:w-1/2">
        <img className="h-auto w-full" src="images/track-removebg-preview.png" alt="Customer Support" />
      </div>
      <div className="lg:w-1/2 lg:pr-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">GPS tracker & speed governors</h2>
        <p className="text-lg text-gray-600 mb-4">We are a leading company that specializes in providing GPS trackers and speed governors for vehicles,
goods, and assets. Our team of experts has years of experience in designing, installing, and maintaining
GPS trackers and speed governors, helping organizations to improve fleet management and logistics
operations.</p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Contact Us
        </button> */}
      </div>
     
    </div>
  </div>
  );
}

export default Gps;

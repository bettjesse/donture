const Hero = () => {
    return (
      <div className="mt-0 flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-100">
        <div className="w-full">
          <img src="/images/camera-4782910_1920.jpg" className="w-full" alt="Hero Image" />
        </div>
        <div className="w-full lg:w-2/3 md:pl-12">
          <h1 className="text-4xl font-bold mb-4">Home security systems you can count on</h1>
          <p className="mb-6">Fulfill all your home security and automation needs with Donture system. </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Request a Quote</button>
        </div>
      
      </div>
    )
  }
  
  export default Hero;
  

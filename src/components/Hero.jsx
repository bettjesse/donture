const Hero = () => {
    return (
      <div className="mt-0 flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-100">
        <div className="w-full">
          <img src="/images/camera-4782910_1920.jpg" className="w-full" alt="Hero Image" />
        </div>
        <div className="w-full lg:w-2/3 md:pl-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to our website</h1>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim vel lacus venenatis aliquet. Proin eleifend dolor sit amet sem venenatis, vel feugiat tortor faucibus. Integer ac bibendum mi. Cras nec diam diam. Vivamus rhoncus, sapien nec sollicitudin vulputate, turpis tellus faucibus tellus, at suscipit tellus elit ac metus. In hac habitasse platea dictumst. </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Request a Quote</button>
        </div>
      
      </div>
    )
  }
  
  export default Hero;
  
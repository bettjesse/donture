const CustomerSupport = () => {
    const handleContactUs = () => {
      // Replace the URL below with the appropriate page for contacting customer support
      window.location.href = 'https://example.com/contact-us';
    }
  
    return (
      <div className="flex items-center justify-center  py-10 rounded-lg  mx-auto md:px-2 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Need help? Contact our customer support</h2>
            <p className="text-lg text-gray-600 mb-4">DONUTURE SYSTEMS provides round-the-clock customer service through multiple communication channels such as phone, email, and live chat. The company is dedicated to addressing customer queries and resolving issues promptly. Additionally, DONUTURE SYSTEMS offers installation and training services to ensure customers use their products correctly.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleContactUs}>
              Contact Us
            </button>
          </div>
          <div className="lg:w-1/2">
            <img className="h-auto w-full rounded-lg" src="images/customer.jpg" alt="Customer Support" />
          </div>
        </div>
      </div>
    )
  }
  
  export default CustomerSupport;
  
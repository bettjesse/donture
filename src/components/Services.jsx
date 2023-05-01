import React from 'react';


const Services = () => {
  return (
    <div>
      {/* Section 1: Professional Installation */}
      <section className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-40"></div>
        <img src={"images/instalation.jpg"} alt="Professional Installation" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Professional Installation</h2>
            <p className="text-xl">Allow our experts to set up your residential security system. You need not be concerned about the wiring or connectivity as we will take care of it all for you. We will install the system and provide instructions on how to operate all of its components.</p>
          </div>
        </div>
      </section>

      {/* Section 2: 24/7 Monitoring */}
      <section className="flex flex-col md:flex-row py-16">
        <img src={"images/monitoring.jpg"} alt="24/7 Monitoring" className="md:w-1/2 object-cover rounded-lg" />
        <div className="md:w-1/2 px-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">24/7 Monitoring</h2>
          <p className=" mb-8">Our security systems are monitored around the clock, 7 days a week, to ensure the safety of your home or business. We have a team of trained professionals who constantly monitor your security system to detect any unusual activity and take necessary action immediately. With our monitoring service, you can have peace of mind knowing that your property is being protected at all times.</p>
        </div>
      </section>

      {/* Section 3: Consultation */}
      <section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center">
    <div className="md:w-1/2 md:pr-8">
      <h2 className="text-4xl font-bold mb-4">Consultation</h2>
      <p className="text-xl mb-8">In addition to installation and monitoring services, we also offer consultation services to help you make informed decisions about the security products that are best suited for your specific needs. Our experienced team of security experts will work with you to assess your security requirements and recommend the most effective solutions. </p>
      <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300">Get in touch</button>
    </div>
    <img src={"images/consultation.jpg"} alt="Consultation" className="md:w-1/2 object-cover mb-8 md:mb-0 rounded -lg" />
  </div>
</section>


      {/* Section 4: Customer Support */}
      <section className="flex flex-col justify-center items-center py-16 bg-cover bg-center bg-gray-900" style={{ backgroundImage: `url(images/licensed.jpg)` }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <p className="text-4xl font-bold mb-4">LICENSED PROFESSIONAL INSTALLATION</p>
    <p className="text-xl mb-8">Pros you can trust</p>
    <p className="text-xl mb-8">A licensed Smart Home Pro will schedule around your needs, hear your concerns, and install your system with care. They’ll follow any necessary health protocols and do all they can to keep you and your household healthy and safe.</p>
    <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300">Get started</button>
  </div>
</section>
    </div>
  );
};

export default Services;
``

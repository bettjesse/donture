import { useState } from 'react';

const QuoteForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, phone, message });
    // Here you can add your logic to handle the form submission
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full md:w-1/2 lg:w-2/3 px-6">
      <p className="text-4xl font-bold mb-4">Build your system today—<br />with <span className="text-blue-600 font-extrabold">professional installation</span></p>

        <p className="text-lg mb-4">Need help? Call or text us and we'll help you find what you're looking for.</p>
        <p className="text-lg mb-4">Phone: (123) 456-7890</p>
        <p className="text-lg mb-4">Text: (123) 456-7890</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-6 py-8">
        <form onSubmit={handleSubmit} className="bg-gray-100 px-6 py-8 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Request a Quote</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="border-2 border-gray-300 px-4 py-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoe@example.com" className="border-2 border-gray-300 px-4 py-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-bold mb-2">Phone</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(254) 456-7890" className="border-2 border-gray-300 px-4 py-2 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-2">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we assist you?" className="border-2 border-gray-300 px-4 py-2 rounded-md w-full"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Request  Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;

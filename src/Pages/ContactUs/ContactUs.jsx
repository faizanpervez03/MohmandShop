import React from 'react'


const ContactUs = () => {
	return (
		<>

<div className="container mx-auto px-4 py-10 lg:px-20 lg:py-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Contact Us
      </h2>
	  <h1 className="text-center text-lg text-gray-600 mb-12">
        Have any questions or concerns? Feel free to reach out to us using the
        form below. <br />
        کیا آپ کے کوئی سوالات یا خدشات ہیں؟ براہ کرم نیچے دیئے گئے فارم کے ذریعے ہم سے رابطہ کریں۔
      </h1>
      <form className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subject Field */}
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-medium mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Enter the subject"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
			{/* <!-- End Hero Section --> */}



			


		</>


	)
}

export default ContactUs

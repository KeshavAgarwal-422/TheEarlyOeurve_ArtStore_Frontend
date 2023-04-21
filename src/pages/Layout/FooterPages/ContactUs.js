import React from "react";

const ContactUs = () => {
  const handleClick = () => {
    window.location.href = "mailto:theearlyoeurve@gmail.com";
  };
  return (
    <div className="bg-white font-optima-lt-std">
      <div className="container px-3 mx-auto flex flex-wrap ">
        <div className="max-w-screen-xl mx-5 lg:pl-10  mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-black tracking-widest text-center pb-5">
            CONTACT US
          </h2>
          <h1 className="text-gray-900 text-7xl title-font font-medium mb-4">
            Have a question or comment?
          </h1>
          <p className="leading-relaxed">
            We would love to hear from you! Whether you have a question about
            our products, need help with an order, or just want to chat about
            art, we're here to help.
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex-grow">
              <div className="leading-relaxed text-gray-900">
                <h2 className="text-gray-900 font-medium title-font mb-2">
                  Email
                </h2>
                <a
                  href="mailto:theearlyoeurve@gmail.com"
                  className="text-gray-500"
                  onClick={handleClick}
                >
                  theearlyoeurve@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex-grow">
              <div className="leading-relaxed text-gray-900">
                <h2 className="text-gray-900 font-medium title-font mb-2">
                  Phone
                </h2>
                <p className="text-gray-500">(123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-grow">
              <div className="leading-relaxed text-gray-900">
                <h2 className="text-gray-900 font-medium title-font mb-2">
                  Address
                </h2>
                <p className="text-gray-500">
                  123, Main Road Kandivali West Mumbai, Maharashtra 400067 India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

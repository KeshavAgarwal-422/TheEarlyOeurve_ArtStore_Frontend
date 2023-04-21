import React from "react";

const PrivacyPolicies = () => {
  return (
    <div className="bg-white  font-optima-lt-std min-h-[800px]">
      <div className="max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-8xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Privacy Policies
          </h2>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            We take the privacy of our website visitors and customers seriously.
            When you use our website or make a purchase from our online store,
            we may collect personal information such as your name, email
            address, shipping address, and payment information. We use this
            information to process and ship your orders, communicate with you
            about your orders and account, and improve our website and services.
          </p>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            We do not sell or share your personal information with third parties
            for marketing purposes. We may share your information with
            third-party service providers such as payment processors, shipping
            carriers, and email marketing providers, but only as necessary to
            fulfill your orders and provide our services.
          </p>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            We may also use your personal information for other purposes with
            your consent, such as sending you promotional offers or newsletters.
          </p>
          <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            Cookies and Tracking
          </h3>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            We use cookies and similar tracking technologies to analyze website
            traffic and usage, customize website content and advertising, and
            improve our website and services. By using our website, you consent
            to the use of cookies and tracking technologies as described in our
            Cookie Policy.
          </p>
          <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            Security
          </h3>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            We take reasonable measures to protect the security of your personal
            information, including using SSL encryption for all website traffic
            and storing your payment information in encrypted form. However, no
            method of transmission or storage is 100% secure{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicies;

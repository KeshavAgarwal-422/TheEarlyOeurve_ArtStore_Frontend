import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-white font-optima-lt-std min-h-[800px]">
      <div className="max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-8xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Disclaimer
          </h2>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900">
            Content Accuracy
          </h3>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            The information contained in this website is for general information
            purposes only. We make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability,
            suitability, or availability with respect to the website or the
            information, products, services, or related graphics contained on
            the website for any purpose. Any reliance you place on such
            information is therefore strictly at your own risk.
          </p>
          <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            External Links
          </h3>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            This website may contain links to external websites that are not
            provided or maintained by us. We do not control or endorse the
            content or practices of these websites, and we are not responsible
            for their content or privacy policies. Your use of any external
            website is at your own risk and is subject to the terms and
            conditions of that website.
          </p>
          <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            Limitation of Liability
          </h3>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>
          <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            Indemnification
          </h3>
          <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
            You agree to indemnify, defend and hold harmless our website and its
            affiliates, officers, directors, employees, agents, licensors, and
            suppliers from and against all losses, liabilities, expenses,
            damages, and costs, including reasonable attorneys' fees.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

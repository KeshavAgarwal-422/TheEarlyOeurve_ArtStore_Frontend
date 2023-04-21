import React from "react";

const Help = () => {
  return (
    <div className="bg-white  font-optima-lt-std">
      <div className="max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-8xl font-extrabold text-gray-900 sm:text-4xl">
              Need Help?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              If you have any questions or issues, please don't hesitate to
              reach out to our support team. We're available 24/7 to assist you
              with any concerns you may have.
            </p>
          </div>

          <div className="col-span-2 ">
            <dl className="space-y-10 ">
              <div>
                <dt className="text-xlg leading-6 font-medium text-gray-900">
                  What is your return policy?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We do not offer refunds on any purchases. However, if you're
                  not completely satisfied with your order, please contact our
                  support team and we'll be happy to assist you with a return or
                  exchange for store credit.
                </dd>
              </div>

              <div>
                <dt className="text-xlg leading-6 font-medium text-gray-900">
                  How do I track my order?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Once your order has shipped, you'll receive a tracking number
                  via email. You can use this number to track your order on our
                  website or on the carrier's website.
                </dd>
              </div>

              <div>
                <dt className="text-xlg leading-6 font-medium text-gray-900">
                  What payment methods do you accept?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We accept all major credit cards, as well as PayPal and Apple
                  Pay.
                </dd>
              </div>

              <div>
                <dt className="text-xlg leading-6 font-medium text-gray-900">
                  Do you offer international shipping?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, we offer international shipping to select countries.
                  Shipping rates and delivery times vary by location.
                </dd>
              </div>

              <div>
                <dt className="text-xlg leading-6 font-medium text-gray-900">
                  How can I contact customer support?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  You can reach our customer support team by email at
                  theearlyouevre@gmail.com or by phone at 1-800-ART-STORE.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

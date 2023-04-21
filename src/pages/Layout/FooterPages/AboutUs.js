import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white  font-optima-lt-std min-h-[800px] ">
      <div className="max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-8xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-gray-900">
            About Us
          </h2>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900">
              Our Story
            </h3>
            <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
              Our mission is to make high-quality art accessible to everyone. We
              believe that everyone should have the opportunity to experience
              the joy of owning and appreciating beautiful art, regardless of
              their budget or location. That's why we've created an online art
              store that features a wide selection of affordable artwork from
              talented artists around the world.
            </p>

            <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
              Our collection includes a diverse range of art styles and mediums,
              from classic oil paintings to modern digital prints. We work with
              artists from around the world to curate a selection of art that is
              both beautiful and affordable. Whether you're looking for a
              statement piece for your living room or a unique gift for a loved
              one, we have something for everyone.
            </p>
            <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500">
              At our online art store, we value creativity, diversity, and
              affordability. We believe that art should be accessible to
              everyone, regardless of their background or financial situation.
              We also believe in supporting artists and promoting their work,
              which is why we pay our artists fair prices for their art and give
              them a platform to showcase their talent.
            </p>
          </div>
          <div>
            <h3 className="text-xlg sm:text-xl md:text-2xl lg:text-3xl leading-6 font-medium text-gray-900">
              Our Team
            </h3>
            <ul className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-500 list-disc list-inside">
              <li>Neetu Agarwal </li>
              <li>Aman Mishra </li>
              <li>Shreshtha Agarwal </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import FeaturedArtContainer from "../../components/Containers/FeaturedArtContainer";

const CoverPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden    min-w-[450px] min-h-full">
      <div className="max-w-screen-xl mx-10 mb-20 font-optima-lt-std px-4 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 grid  gap-8">
          <div>
            <p className="mt-2 sm:mt-4 md:mt-6 text-5xl sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-800">
              Welcome to The Early Oeuvre, where you can discover and purchase
              unique and high-quality artworks from the comfort of your own
              home. Our carefully curated collection showcases a diverse range
              of styles and mediums from emerging and established artists.
            </p>

            <p className="mt-2 sm:mt-4 md:mt-6 text-5xl sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-800">
              Browse our extensive selection of paintings, prints, sculptures,
              and mixed media pieces, all of which are available for purchase
              with just a few clicks. Our user-friendly platform makes it easy
              to find exactly what you're looking for, whether you're searching
              for a specific artist or theme, or simply browsing for
              inspiration.
            </p>
            <p className="mt-2 sm:mt-4 md:mt-6 text-5xl sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-800">
              Our commitment to quality extends beyond the artworks themselves.
              We work closely with our artists to ensure that each piece is
              produced using the highest quality materials and techniques, and
              we offer a 100% satisfaction guarantee on every purchase.
            </p>
            <p className="mt-2 sm:mt-4 md:mt-6 text-5xl sm:text-lg md:text-xl lg:text-2xl leading-6 text-gray-800">
              Whether you're an art collector, a first-time buyer, or simply
              someone who appreciates the beauty of fine art, our online store
              has something for everyone. Shop with us today and discover the
              perfect piece to elevate your home or office décor!
            </p>
          </div>
        </div>
      </div>
      <FeaturedArtContainer />
    </div>
  );
};

export default CoverPage;

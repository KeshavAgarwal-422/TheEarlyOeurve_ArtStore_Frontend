import ArtistCard from "../Cards/ArtistCard";

const ArtistSectionContainer = () => {
  return (
    <section className="self-stretch bg-whitesmoke-100 flex flex-col py-14 px-[50px] items-start justify-start text-left text-base text-gray-200 font-karla mq685:pl-5 mq685:pr-5 mq685:box-border mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
      <div className="self-stretch flex flex-col py-0 px-10 items-start justify-start gap-[32px]">
        <div className="relative tracking-[0.88px] leading-[24px] uppercase ">
          Featured Artists
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-xl font-optima-lt-std mq685:flex-col ">
          <ArtistCard
            ImageUrl="https://i.ibb.co/nrYPxC9/132836356-3566054123429633-4251126981234917118-n-cleanup-modified.png"
            name="NeetuAgarwal"
            profile="Artist, India"
          />
          <ArtistCard
            ImageUrl="https://i.ibb.co/tYyvWQP/321337946-502926655023952-3553928575725872998-n-11-2x.png"
            name="AmanMishra"
            profile="Painter, India"
          />
          <ArtistCard
            ImageUrl="https://i.ibb.co/WWCbmD5/136411404-474730896873843-1944920279434530665-n-11-2x.png"
            name="ShreshthaAgarwal"
            profile="Painter, India"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtistSectionContainer;
